export const PythonLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="#306998" d="M128 24v54a15 15 0 0015 15h51v-34a15 15 0 00-15-15h-36a15 15 0 00-15 15z" />
      <path fill="#FFD43B" d="M128 232v-54a15 15 0 0115-15h51v34a15 15 0 01-15 15h-36a15 15 0 01-15-15z" />
      <g fill="#306998">
        <ellipse cx="187.3" cy="128" rx="10.7" ry="10.5" />
        <path d="M194 72a27 27 0 00-27-27h-39v54h51c14.91 0 27-12.09 27-27s-12.09-27-27-27z" />
      </g>
      <g fill="#FFD43B">
        <ellipse cx="68.7" cy="128" rx="10.7" ry="10.5" />
        <path d="M62 184a27 27 0 0027 27h39v-54H77c-14.91 0-27 12.09-27 27s12.09 27 27 27z" />
      </g>
    </svg>
  );
  