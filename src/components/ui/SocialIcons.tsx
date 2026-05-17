type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.92A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TwitterIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2H21l-6.55 7.49L22 22h-6.49l-5.08-6.65L4.6 22H2l7.02-8.03L2 2h6.66l4.59 6.07L18.244 2zm-2.27 18h1.81L7.13 4H5.2l10.774 16z" />
    </svg>
  );
}

export function PinterestIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.66 7.92 6.41 9.39-.09-.8-.17-2.03.04-2.9.18-.79 1.17-5.02 1.17-5.02s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.65 1.27 1.42 0 .87-.55 2.16-.83 3.36-.24 1 .5 1.81 1.49 1.81 1.79 0 3.16-1.89 3.16-4.62 0-2.41-1.74-4.1-4.22-4.1-2.87 0-4.56 2.16-4.56 4.38 0 .87.33 1.8.75 2.31.08.1.09.18.07.28-.07.32-.24.99-.27 1.12-.04.18-.14.22-.32.13-1.19-.56-1.94-2.3-1.94-3.7 0-3.01 2.19-5.78 6.31-5.78 3.31 0 5.88 2.36 5.88 5.51 0 3.29-2.07 5.94-4.95 5.94-.97 0-1.88-.5-2.19-1.09l-.6 2.27c-.21.85-.79 1.91-1.18 2.56.89.28 1.83.43 2.83.43 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}
