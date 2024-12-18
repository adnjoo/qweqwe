import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const broadcasterId = searchParams.get('broadcaster_id');
  const accessToken = searchParams.get('access_token');

  if (!broadcasterId || !accessToken) {
    return new NextResponse(
      JSON.stringify({
        error: 'Missing broadcaster_id or access_token parameter',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/channels?broadcaster_id=${broadcasterId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Client-Id': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID || '',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch stream title: ${response.statusText}`);
    }

    const data = await response.json();
    const title = data?.data?.[0]?.title || 'No title found';

    return new NextResponse(JSON.stringify({ title }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching stream title:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch stream title' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}