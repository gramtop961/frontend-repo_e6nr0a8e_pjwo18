export default function GlobalGradient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
      <div className="absolute inset-x-0 top-[-10rem] -z-0 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[50%] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-indigo-300 opacity-30"
          style={{ clipPath: 'polygon(74% 44%,100% 61%,97% 26%,88% 0,75% 7%,64% 2%,52% 24%,35% 18%,26% 30%,18% 58%,0 57%,18% 100%,30% 86%,41% 100%,49% 83%,63% 85%)' }}
        />
      </div>
    </div>
  );
}
