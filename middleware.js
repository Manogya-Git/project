import { NextResponse } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'; // Use the correct import path

// Middleware function
export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();

  // Check if the user is authenticated
  if (!(await isAuthenticated())) {
    // Redirect to the login page with a post-login redirect URL
    return NextResponse.redirect(
      new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url)
    );
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next();
}

// Configuration for matching paths
export const config = {
  matcher: '/dashboard/:path*',
};
