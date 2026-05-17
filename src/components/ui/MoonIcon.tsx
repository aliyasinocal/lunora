type Props = {
  className?: string;
  size?: number;
};

export default function MoonIcon({ className = "", size = 24 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M22.5 4.5C18.5 8 16.4 12.6 16.4 16c0 3.4 2.1 8 6.1 11.5C14.9 26.7 9.5 21.8 9.5 16S14.9 5.3 22.5 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
