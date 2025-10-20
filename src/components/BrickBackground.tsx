"use client";

import { CSSProperties, useId } from "react";

type BrickBackgroundProps = {
  brickWidth?: number;
  brickHeight?: number;
  stroke?: string;
  strokeWidth?: number;
  phoneScale?: number;
  className?: string;
};

export default function BrickBackground({
  brickWidth = 120,
  brickHeight = 40,
  stroke = "#d4d4d4", // Tailwind neutral-300
  strokeWidth = 1,
  phoneScale = 0.6,
  className = "",
}: BrickBackgroundProps) {
  const patternId = useId();

  const pw = brickWidth * 2;
  const ph = brickHeight * 2;

  // Lines for two-row pattern:
  // Horizontal mortar lines at y = 0, brickHeight, 2*brickHeight
  // Vertical lines (row 1): x = 0, brickWidth, 2*brickWidth
  // Vertical lines (row 2 offset by half brick): x = brickWidth/2, 3*brickWidth/2 (plus edges)
  const v1 = [0, brickWidth, 2 * brickWidth];
  const v2 = [brickWidth / 2, (3 * brickWidth) / 2];

  const styles = {
    "--bb-phone-scale": String(phoneScale),
  } as CSSProperties;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
      style={styles}
    >
      {/* 
        Scaling the SVG on small screens while keeping full coverage.
        Renders the SVG bigger (width/height divided by scale) then scale down.
      */}
      <div className="absolute inset-0">
        <style
          // Media query scoped to component via wrapper
          dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 640px) {
              .bb-wrap {
                transform: scale(var(--bb-phone-scale));
                transform-origin: top left;
              }
              .bb-size {
                width: calc(100% / var(--bb-phone-scale));
                height: calc(100% / var(--bb-phone-scale));
              }
            }
          `,
          }}
        />
        <svg
          className="bb-wrap block"
          width="100%"
          height="100%"
          viewBox={`0 0 100 100`}
          preserveAspectRatio="none"
        >
        </svg>

        <svg className="bb-size absolute inset-0 block w-full h-full">
          <defs>
            <pattern
              id={patternId}
              patternUnits="userSpaceOnUse"
              width={pw}
              height={ph}
            >
              {/* White background so the page stays white */}
              <rect x="0" y="0" width={pw} height={ph} fill="#ffffff" />

              {/* Horizontal lines */}
              <line
                x1="0"
                y1="0"
                x2={pw}
                y2="0"
                stroke={stroke}
                strokeWidth={strokeWidth}
              />
              <line
                x1="0"
                y1={brickHeight}
                x2={pw}
                y2={brickHeight}
                stroke={stroke}
                strokeWidth={strokeWidth}
              />
              <line
                x1="0"
                y1={ph}
                x2={pw}
                y2={ph}
                stroke={stroke}
                strokeWidth={strokeWidth}
              />

              {/* Vertical lines for row 1 */}
              {v1.map((x) => (
                <line
                  key={`r1-${x}`}
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={brickHeight}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                />
              ))}

              {/* Vertical lines for row 2*/}
              {v2.map((x) => (
                <line
                  key={`r2-${x}`}
                  x1={x}
                  y1={brickHeight}
                  x2={x}
                  y2={ph}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                />
              ))}
            </pattern>
          </defs>

          {/* Fill whole viewport with the pattern */}
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
    </div>
  );
}
