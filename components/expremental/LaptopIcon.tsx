import { useSpring, animated, config } from "react-spring";

export default function LaptopIcon() {
  const { fill , fill2} = useSpring({
    from: {
      fill: "#fff",
      fill2: "#fff",

    },
    to: {
      fill: "#0085ff",
      fill2: "#e1df22",
    },
    reset: true,
    loop: { reverse: true },
    config: config.slow,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="126.305"
      height="133.714"
      viewBox="0 0 126.305 133.714"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#adc4d6" />
        </linearGradient>
      </defs>
      <g id="Group_1733" data-name="Group 1733" transform="translate(-29.686)">
        <g
          id="Group_1321"
          data-name="Group 1321"
          transform="translate(29.688 101.654)"
        >
          <ellipse
            id="Ellipse_24"
            data-name="Ellipse 24"
            cx="2.057"
            cy="2.057"
            rx="2.057"
            ry="2.057"
            fill="#999"
          />
          <ellipse
            id="Ellipse_25"
            data-name="Ellipse 25"
            cx="1.47"
            cy="1.47"
            rx="1.47"
            ry="1.47"
            transform="translate(0.641 0.621)"
            fill="gray"
          />
          <path
            id="Path_12066"
            data-name="Path 12066"
            d="M63.405,93.4l1.416.738.261,1.42L62.97,94.344A2.045,2.045,0,0,1,63.405,93.4Z"
            transform="translate(-62.934 -92.66)"
            opacity="0.15"
            style={{ mixBlendMode: "multiply", isolation: "isolate" }}
          />
        </g>
        <g id="Group_1322" data-name="Group 1322" transform="translate(29.686)">
          <path
            id="Path_12067"
            data-name="Path 12067"
            d="M65.319,108.718,138.05,66.726c1.3-.75,2.359-.307,2.359,1v56.43L62.96,168.867v-56.43A4.891,4.891,0,0,1,65.319,108.718Z"
            transform="translate(-62.96 -66.362)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12068"
            data-name="Path 12068"
            d="M65.32,108.721l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L62.961,168.869v-56.43A4.885,4.885,0,0,1,65.32,108.721Z"
            transform="translate(-62.957 -66.36)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12069"
            data-name="Path 12069"
            d="M65.321,108.719l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L62.962,168.868v-56.43A4.892,4.892,0,0,1,65.321,108.719Z"
            transform="translate(-62.954 -66.359)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12070"
            data-name="Path 12070"
            d="M65.322,108.718,138.053,66.73c1.3-.753,2.359-.307,2.359,1v56.43L62.963,168.87V112.44A4.9,4.9,0,0,1,65.322,108.718Z"
            transform="translate(-62.952 -66.357)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12071"
            data-name="Path 12071"
            d="M65.323,108.722,138.054,66.73c1.3-.753,2.359-.307,2.359,1v56.43L62.964,168.87V112.44A4.891,4.891,0,0,1,65.323,108.722Z"
            transform="translate(-62.949 -66.357)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12072"
            data-name="Path 12072"
            d="M65.324,108.719,138.055,66.73c1.3-.754,2.359-.307,2.359,1v56.43L62.965,168.871v-56.43A4.9,4.9,0,0,1,65.324,108.719Z"
            transform="translate(-62.946 -66.355)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12073"
            data-name="Path 12073"
            d="M65.325,108.723,138.056,66.73c1.3-.754,2.359-.307,2.359,1v56.43L62.966,168.871v-56.43A4.885,4.885,0,0,1,65.325,108.723Z"
            transform="translate(-62.943 -66.355)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12074"
            data-name="Path 12074"
            d="M65.326,108.721l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L62.967,168.873v-56.43A4.9,4.9,0,0,1,65.326,108.721Z"
            transform="translate(-62.94 -66.353)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12075"
            data-name="Path 12075"
            d="M65.327,108.724l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L62.968,168.872v-56.43A4.891,4.891,0,0,1,65.327,108.724Z"
            transform="translate(-62.938 -66.352)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12076"
            data-name="Path 12076"
            d="M65.328,108.722,138.059,66.73c1.3-.75,2.359-.3,2.359,1v56.43L62.969,168.874v-56.43A4.9,4.9,0,0,1,65.328,108.722Z"
            transform="translate(-62.935 -66.35)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12077"
            data-name="Path 12077"
            d="M65.329,108.725,138.06,66.732c1.3-.754,2.359-.307,2.359,1v56.43L62.97,168.873v-56.43A4.885,4.885,0,0,1,65.329,108.725Z"
            transform="translate(-62.932 -66.349)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12078"
            data-name="Path 12078"
            d="M65.326,108.723l72.735-41.992c1.3-.75,2.359-.3,2.359,1v56.43L62.971,168.875v-56.43A4.9,4.9,0,0,1,65.326,108.723Z"
            transform="translate(-62.929 -66.347)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12079"
            data-name="Path 12079"
            d="M65.327,108.726l72.734-41.992c1.3-.753,2.355-.307,2.355,1v56.43L62.972,168.874v-56.43A4.881,4.881,0,0,1,65.327,108.726Z"
            transform="translate(-62.927 -66.346)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12080"
            data-name="Path 12080"
            d="M65.328,108.724l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.434L62.973,168.876v-56.43A4.893,4.893,0,0,1,65.328,108.724Z"
            transform="translate(-62.924 -66.344)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12081"
            data-name="Path 12081"
            d="M65.329,108.727l72.734-41.992c1.3-.753,2.355-.307,2.355,1v56.43L62.974,168.875v-56.43A4.881,4.881,0,0,1,65.329,108.727Z"
            transform="translate(-62.921 -66.343)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12082"
            data-name="Path 12082"
            d="M65.333,108.725l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.426L62.974,168.877v-56.43A4.892,4.892,0,0,1,65.333,108.725Z"
            transform="translate(-62.921 -66.342)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12083"
            data-name="Path 12083"
            d="M65.334,108.728l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L62.975,168.876v-56.43A4.885,4.885,0,0,1,65.334,108.728Z"
            transform="translate(-62.918 -66.341)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12084"
            data-name="Path 12084"
            d="M65.335,108.726l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L62.976,168.875v-56.43A4.891,4.891,0,0,1,65.335,108.726Z"
            transform="translate(-62.915 -66.339)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12085"
            data-name="Path 12085"
            d="M65.336,108.729l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L62.977,168.877v-56.43A4.885,4.885,0,0,1,65.336,108.729Z"
            transform="translate(-62.913 -66.338)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12086"
            data-name="Path 12086"
            d="M65.337,108.727l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L62.978,168.876v-56.43A4.892,4.892,0,0,1,65.337,108.727Z"
            transform="translate(-62.91 -66.337)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12087"
            data-name="Path 12087"
            d="M65.338,108.73l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L62.979,168.878v-56.43A4.885,4.885,0,0,1,65.338,108.73Z"
            transform="translate(-62.907 -66.335)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12088"
            data-name="Path 12088"
            d="M65.339,108.73,138.07,66.738c1.3-.754,2.359-.307,2.359,1v56.43L62.98,168.878v-56.43A4.891,4.891,0,0,1,65.339,108.73Z"
            transform="translate(-62.904 -66.335)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12089"
            data-name="Path 12089"
            d="M65.34,108.727l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L62.981,168.879v-56.43A4.9,4.9,0,0,1,65.34,108.727Z"
            transform="translate(-62.901 -66.332)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12090"
            data-name="Path 12090"
            d="M65.341,108.731l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L62.982,168.879v-56.43A4.885,4.885,0,0,1,65.341,108.731Z"
            transform="translate(-62.899 -66.332)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12091"
            data-name="Path 12091"
            d="M65.342,108.728,138.073,66.74c1.3-.754,2.359-.307,2.359,1v56.43L62.983,168.88V112.45A4.9,4.9,0,0,1,65.342,108.728Z"
            transform="translate(-62.896 -66.33)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12092"
            data-name="Path 12092"
            d="M65.343,108.732,138.074,66.74c1.3-.754,2.359-.307,2.359,1v56.43L62.984,168.88V112.45A4.885,4.885,0,0,1,65.343,108.732Z"
            transform="translate(-62.893 -66.33)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12093"
            data-name="Path 12093"
            d="M65.34,108.73l72.735-41.992c1.3-.75,2.359-.3,2.359,1v56.43L62.985,168.882v-56.43A4.9,4.9,0,0,1,65.34,108.73Z"
            transform="translate(-62.89 -66.328)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12094"
            data-name="Path 12094"
            d="M65.341,108.733l72.735-41.992c1.3-.754,2.355-.307,2.355,1v56.43L62.986,168.881v-56.43A4.881,4.881,0,0,1,65.341,108.733Z"
            transform="translate(-62.888 -66.327)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12095"
            data-name="Path 12095"
            d="M65.342,108.731l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.43L62.987,168.883v-56.43A4.893,4.893,0,0,1,65.342,108.731Z"
            transform="translate(-62.885 -66.325)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12096"
            data-name="Path 12096"
            d="M65.343,108.734l72.735-41.992c1.3-.753,2.355-.307,2.355,1v56.43L62.988,168.882v-56.43A4.881,4.881,0,0,1,65.343,108.734Z"
            transform="translate(-62.882 -66.324)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12097"
            data-name="Path 12097"
            d="M65.347,108.732,138.081,66.74c1.3-.75,2.355-.3,2.355,1v56.43L62.988,168.884v-56.43A4.9,4.9,0,0,1,65.347,108.732Z"
            transform="translate(-62.882 -66.322)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12098"
            data-name="Path 12098"
            d="M65.348,108.735l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L62.989,168.883v-56.43A4.885,4.885,0,0,1,65.348,108.735Z"
            transform="translate(-62.879 -66.321)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12099"
            data-name="Path 12099"
            d="M65.349,108.733,138.08,66.741c1.3-.75,2.359-.3,2.359,1v56.43L62.99,168.885v-56.43A4.9,4.9,0,0,1,65.349,108.733Z"
            transform="translate(-62.876 -66.319)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12100"
            data-name="Path 12100"
            d="M65.35,108.736l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L62.991,168.884v-56.43A4.885,4.885,0,0,1,65.35,108.736Z"
            transform="translate(-62.874 -66.318)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12101"
            data-name="Path 12101"
            d="M65.351,108.734l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L62.992,168.886V112.452A4.891,4.891,0,0,1,65.351,108.734Z"
            transform="translate(-62.871 -66.317)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12102"
            data-name="Path 12102"
            d="M65.352,108.737l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L62.993,168.885v-56.43A4.885,4.885,0,0,1,65.352,108.737Z"
            transform="translate(-62.868 -66.316)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12103"
            data-name="Path 12103"
            d="M65.353,108.735l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L62.994,168.884v-56.43A4.891,4.891,0,0,1,65.353,108.735Z"
            transform="translate(-62.865 -66.314)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12104"
            data-name="Path 12104"
            d="M65.354,108.738l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L62.995,168.886v-56.43A4.885,4.885,0,0,1,65.354,108.738Z"
            transform="translate(-62.862 -66.313)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12105"
            data-name="Path 12105"
            d="M65.355,108.736l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63,168.885v-56.43A4.891,4.891,0,0,1,65.355,108.736Z"
            transform="translate(-62.86 -66.312)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12106"
            data-name="Path 12106"
            d="M65.356,108.735l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63,168.887v-56.43A4.9,4.9,0,0,1,65.356,108.735Z"
            transform="translate(-62.857 -66.31)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12107"
            data-name="Path 12107"
            d="M65.357,108.739l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63,168.887v-56.43A4.892,4.892,0,0,1,65.357,108.739Z"
            transform="translate(-62.854 -66.31)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12108"
            data-name="Path 12108"
            d="M65.354,108.737l72.735-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63,168.889v-56.43A4.9,4.9,0,0,1,65.354,108.737Z"
            transform="translate(-62.851 -66.308)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12109"
            data-name="Path 12109"
            d="M65.355,108.74,138.09,66.747c1.3-.754,2.355-.307,2.355,1v56.43L63,168.888v-56.43A4.88,4.88,0,0,1,65.355,108.74Z"
            transform="translate(-62.849 -66.307)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12110"
            data-name="Path 12110"
            d="M65.356,108.737l72.734-41.988c1.3-.753,2.355-.307,2.355,1v56.43L63,168.889v-56.43A4.893,4.893,0,0,1,65.356,108.737Z"
            transform="translate(-62.846 -66.304)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12111"
            data-name="Path 12111"
            d="M65.357,108.741l72.735-41.992c1.3-.753,2.355-.307,2.355,1v56.43L63,168.889v-56.43A4.881,4.881,0,0,1,65.357,108.741Z"
            transform="translate(-62.843 -66.304)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12112"
            data-name="Path 12112"
            d="M65.361,108.739,138.1,66.747c1.3-.75,2.355-.3,2.355,1v56.43L63,168.891v-56.43A4.9,4.9,0,0,1,65.361,108.739Z"
            transform="translate(-62.843 -66.302)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12113"
            data-name="Path 12113"
            d="M65.362,108.742l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63,168.89V112.46A4.885,4.885,0,0,1,65.362,108.742Z"
            transform="translate(-62.84 -66.302)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12114"
            data-name="Path 12114"
            d="M65.363,108.74l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63,168.892v-56.43A4.9,4.9,0,0,1,65.363,108.74Z"
            transform="translate(-62.837 -66.3)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12115"
            data-name="Path 12115"
            d="M65.364,108.743l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.005,168.891v-56.43A4.885,4.885,0,0,1,65.364,108.743Z"
            transform="translate(-62.835 -66.299)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12116"
            data-name="Path 12116"
            d="M65.365,108.741,138.1,66.749c1.3-.75,2.359-.3,2.359,1v56.434L63.006,168.893V112.459A4.9,4.9,0,0,1,65.365,108.741Z"
            transform="translate(-62.832 -66.297)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12117"
            data-name="Path 12117"
            d="M65.366,108.744,138.1,66.751c1.3-.754,2.359-.307,2.359,1v56.43L63.007,168.892v-56.43A4.885,4.885,0,0,1,65.366,108.744Z"
            transform="translate(-62.829 -66.296)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12118"
            data-name="Path 12118"
            d="M65.367,108.742,138.1,66.75c1.3-.75,2.359-.307,2.359,1v56.426L63.008,168.894v-56.43A4.892,4.892,0,0,1,65.367,108.742Z"
            transform="translate(-62.826 -66.295)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12119"
            data-name="Path 12119"
            d="M65.368,108.745,138.1,66.752c1.3-.754,2.359-.307,2.359,1v56.43L63.009,168.893v-56.43A4.885,4.885,0,0,1,65.368,108.745Z"
            transform="translate(-62.823 -66.293)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12120"
            data-name="Path 12120"
            d="M65.369,108.743,138.1,66.751c1.3-.75,2.359-.3,2.359,1v56.43L63.01,168.895V112.461A4.892,4.892,0,0,1,65.369,108.743Z"
            transform="translate(-62.821 -66.291)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12121"
            data-name="Path 12121"
            d="M65.37,108.746,138.1,66.753c1.3-.754,2.359-.307,2.359,1v56.43L63.011,168.894v-56.43A4.885,4.885,0,0,1,65.37,108.746Z"
            transform="translate(-62.818 -66.29)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12122"
            data-name="Path 12122"
            d="M65.371,108.744,138.1,66.752c1.3-.75,2.359-.307,2.359,1v56.43L63.012,168.893v-56.43A4.891,4.891,0,0,1,65.371,108.744Z"
            transform="translate(-62.815 -66.289)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12123"
            data-name="Path 12123"
            d="M65.372,108.747,138.1,66.754c1.3-.753,2.359-.307,2.359,1v56.43L63.013,168.9v-56.43A4.885,4.885,0,0,1,65.372,108.747Z"
            transform="translate(-62.812 -66.288)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12124"
            data-name="Path 12124"
            d="M65.369,108.745,138.1,66.753c1.3-.75,2.355-.307,2.355,1v56.43L63.014,168.894v-56.43A4.9,4.9,0,0,1,65.369,108.745Z"
            transform="translate(-62.81 -66.286)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12125"
            data-name="Path 12125"
            d="M65.37,108.744,138.1,66.755c1.3-.754,2.355-.307,2.355,1v56.43L63.015,168.9v-56.43A4.893,4.893,0,0,1,65.37,108.744Z"
            transform="translate(-62.807 -66.285)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12126"
            data-name="Path 12126"
            d="M65.371,108.748l72.735-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.016,168.9v-56.43A4.881,4.881,0,0,1,65.371,108.748Z"
            transform="translate(-62.804 -66.285)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12127"
            data-name="Path 12127"
            d="M65.375,108.746l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.43L63.016,168.9v-56.43A4.9,4.9,0,0,1,65.375,108.746Z"
            transform="translate(-62.804 -66.283)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12128"
            data-name="Path 12128"
            d="M65.376,108.749l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.017,168.9v-56.43A4.885,4.885,0,0,1,65.376,108.749Z"
            transform="translate(-62.801 -66.282)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12129"
            data-name="Path 12129"
            d="M65.377,108.746l72.731-41.988c1.3-.753,2.359-.307,2.359,1v56.43L63.018,168.9v-56.43A4.9,4.9,0,0,1,65.377,108.746Z"
            transform="translate(-62.798 -66.279)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12130"
            data-name="Path 12130"
            d="M65.378,108.75l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.019,168.9v-56.43A4.885,4.885,0,0,1,65.378,108.75Z"
            transform="translate(-62.796 -66.279)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12131"
            data-name="Path 12131"
            d="M65.379,108.748,138.11,66.756c1.3-.75,2.359-.3,2.359,1v56.43L63.02,168.9V112.47A4.9,4.9,0,0,1,65.379,108.748Z"
            transform="translate(-62.793 -66.277)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12132"
            data-name="Path 12132"
            d="M65.38,108.751l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.021,168.9v-56.43A4.885,4.885,0,0,1,65.38,108.751Z"
            transform="translate(-62.79 -66.277)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12133"
            data-name="Path 12133"
            d="M65.381,108.749l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.434L63.022,168.9V112.467A4.9,4.9,0,0,1,65.381,108.749Z"
            transform="translate(-62.787 -66.275)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12134"
            data-name="Path 12134"
            d="M65.382,108.752,138.113,66.76c1.3-.754,2.359-.307,2.359,1v56.43L63.023,168.9V112.47A4.885,4.885,0,0,1,65.382,108.752Z"
            transform="translate(-62.784 -66.274)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12135"
            data-name="Path 12135"
            d="M65.383,108.75l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.024,168.9v-56.43A4.9,4.9,0,0,1,65.383,108.75Z"
            transform="translate(-62.782 -66.272)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12136"
            data-name="Path 12136"
            d="M65.384,108.753l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.025,168.9v-56.43A4.885,4.885,0,0,1,65.384,108.753Z"
            transform="translate(-62.779 -66.271)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12137"
            data-name="Path 12137"
            d="M65.385,108.751l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.026,168.9V112.47A4.892,4.892,0,0,1,65.385,108.751Z"
            transform="translate(-62.776 -66.27)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12138"
            data-name="Path 12138"
            d="M65.386,108.754l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.027,168.9v-56.43A4.885,4.885,0,0,1,65.386,108.754Z"
            transform="translate(-62.773 -66.268)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12139"
            data-name="Path 12139"
            d="M65.383,108.752,138.118,66.76c1.3-.75,2.359-.307,2.359,1v56.43L63.028,168.9v-56.43A4.9,4.9,0,0,1,65.383,108.752Z"
            transform="translate(-62.771 -66.267)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12140"
            data-name="Path 12140"
            d="M65.384,108.755l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.029,168.9v-56.43A4.881,4.881,0,0,1,65.384,108.755Z"
            transform="translate(-62.768 -66.265)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12141"
            data-name="Path 12141"
            d="M65.385,108.755,138.12,66.763c1.3-.754,2.355-.307,2.355,1v56.43L63.03,168.9v-56.43A4.887,4.887,0,0,1,65.385,108.755Z"
            transform="translate(-62.765 -66.265)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12142"
            data-name="Path 12142"
            d="M65.386,108.756l72.735-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.031,168.9v-56.43A4.881,4.881,0,0,1,65.386,108.756Z"
            transform="translate(-62.762 -66.263)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12143"
            data-name="Path 12143"
            d="M65.39,108.754l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.031,168.9v-56.43A4.885,4.885,0,0,1,65.39,108.754Z"
            transform="translate(-62.762 -66.261)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12144"
            data-name="Path 12144"
            d="M65.391,108.754l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.032,168.906v-56.43A4.9,4.9,0,0,1,65.391,108.754Z"
            transform="translate(-62.759 -66.261)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12145"
            data-name="Path 12145"
            d="M65.392,108.757l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.033,168.905v-56.43A4.885,4.885,0,0,1,65.392,108.757Z"
            transform="translate(-62.757 -66.26)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12146"
            data-name="Path 12146"
            d="M65.393,108.754l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.034,168.906v-56.43A4.9,4.9,0,0,1,65.393,108.754Z"
            transform="translate(-62.754 -66.257)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12147"
            data-name="Path 12147"
            d="M65.394,108.758l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.035,168.906v-56.43A4.885,4.885,0,0,1,65.394,108.758Z"
            transform="translate(-62.751 -66.257)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12148"
            data-name="Path 12148"
            d="M65.395,108.756l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.036,168.908v-56.43A4.9,4.9,0,0,1,65.395,108.756Z"
            transform="translate(-62.748 -66.255)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12149"
            data-name="Path 12149"
            d="M65.4,108.759l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.037,168.907v-56.43A4.885,4.885,0,0,1,65.4,108.759Z"
            transform="translate(-62.745 -66.254)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12150"
            data-name="Path 12150"
            d="M65.4,108.757l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.038,168.909v-56.43A4.9,4.9,0,0,1,65.4,108.757Z"
            transform="translate(-62.743 -66.252)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12151"
            data-name="Path 12151"
            d="M65.4,108.76l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.039,168.908v-56.43A4.885,4.885,0,0,1,65.4,108.76Z"
            transform="translate(-62.74 -66.252)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12152"
            data-name="Path 12152"
            d="M65.4,108.758,138.13,66.766c1.3-.75,2.359-.3,2.359,1V124.2L63.04,168.91V112.476A4.9,4.9,0,0,1,65.4,108.758Z"
            transform="translate(-62.737 -66.25)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12153"
            data-name="Path 12153"
            d="M65.4,108.761l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.041,168.909v-56.43A4.885,4.885,0,0,1,65.4,108.761Z"
            transform="translate(-62.734 -66.249)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12154"
            data-name="Path 12154"
            d="M65.4,108.759l72.735-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.042,168.912v-56.43A4.9,4.9,0,0,1,65.4,108.759Z"
            transform="translate(-62.731 -66.247)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12155"
            data-name="Path 12155"
            d="M65.4,108.762,138.133,66.77c1.3-.754,2.355-.307,2.355,1V124.2L63.043,168.91V112.48A4.881,4.881,0,0,1,65.4,108.762Z"
            transform="translate(-62.729 -66.246)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12156"
            data-name="Path 12156"
            d="M65.4,108.76l72.735-41.992c1.3-.75,2.355-.307,2.355,1v56.43L63.044,168.909v-56.43A4.887,4.887,0,0,1,65.4,108.76Z"
            transform="translate(-62.726 -66.245)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12157"
            data-name="Path 12157"
            d="M65.4,108.763l72.735-41.992c1.3-.754,2.355-.307,2.355,1V124.2L63.045,168.911v-56.43A4.881,4.881,0,0,1,65.4,108.763Z"
            transform="translate(-62.723 -66.243)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12158"
            data-name="Path 12158"
            d="M65.4,108.761l72.735-41.992c1.3-.75,2.355-.307,2.355,1V124.2L63.045,168.91V112.48A4.891,4.891,0,0,1,65.4,108.761Z"
            transform="translate(-62.723 -66.242)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12159"
            data-name="Path 12159"
            d="M65.4,108.764l72.731-41.992c1.3-.753,2.359-.307,2.359,1V124.2L63.046,168.912v-56.43A4.885,4.885,0,0,1,65.4,108.764Z"
            transform="translate(-62.72 -66.24)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12160"
            data-name="Path 12160"
            d="M65.406,108.764l72.731-41.992c1.3-.753,2.359-.307,2.359,1V124.2L63.047,168.912v-56.43A4.892,4.892,0,0,1,65.406,108.764Z"
            transform="translate(-62.718 -66.24)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12161"
            data-name="Path 12161"
            d="M65.407,108.761l72.731-41.988c1.3-.753,2.359-.307,2.359,1V124.2L63.048,168.913v-56.43A4.9,4.9,0,0,1,65.407,108.761Z"
            transform="translate(-62.715 -66.238)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12162"
            data-name="Path 12162"
            d="M65.408,108.763l72.731-41.992c1.3-.75,2.359-.307,2.359,1V124.2L63.049,168.912v-56.43A4.885,4.885,0,0,1,65.408,108.763Z"
            transform="translate(-62.712 -66.236)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12163"
            data-name="Path 12163"
            d="M65.409,108.763,138.14,66.771c1.3-.75,2.359-.3,2.359,1V124.2L63.05,168.915v-56.43A4.9,4.9,0,0,1,65.409,108.763Z"
            transform="translate(-62.709 -66.236)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12164"
            data-name="Path 12164"
            d="M65.41,108.766l72.731-41.992c1.3-.754,2.359-.307,2.359,1V124.2L63.051,168.914v-56.43A4.885,4.885,0,0,1,65.41,108.766Z"
            transform="translate(-62.706 -66.235)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12165"
            data-name="Path 12165"
            d="M65.411,108.764l72.731-41.992c1.3-.75,2.359-.3,2.359,1V124.2L63.052,168.916v-56.43A4.9,4.9,0,0,1,65.411,108.764Z"
            transform="translate(-62.704 -66.233)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12166"
            data-name="Path 12166"
            d="M65.412,108.767l72.731-41.992c1.3-.754,2.359-.307,2.359,1V124.2L63.053,168.915v-56.43A4.885,4.885,0,0,1,65.412,108.767Z"
            transform="translate(-62.701 -66.232)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12167"
            data-name="Path 12167"
            d="M65.413,108.765l72.731-41.992c1.3-.75,2.359-.3,2.359,1V124.2L63.054,168.917v-56.43A4.9,4.9,0,0,1,65.413,108.765Z"
            transform="translate(-62.698 -66.23)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12168"
            data-name="Path 12168"
            d="M65.414,108.768l72.731-41.992c1.3-.753,2.359-.307,2.359,1V124.2L63.055,168.916v-56.43A4.885,4.885,0,0,1,65.414,108.768Z"
            transform="translate(-62.695 -66.229)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12169"
            data-name="Path 12169"
            d="M65.411,108.766l72.735-41.992c1.3-.75,2.359-.3,2.359,1V124.2L63.056,168.918V112.484A4.9,4.9,0,0,1,65.411,108.766Z"
            transform="translate(-62.692 -66.227)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12170"
            data-name="Path 12170"
            d="M65.412,108.769l72.735-41.992c1.3-.754,2.355-.307,2.355,1V124.2L63.057,168.917v-56.43A4.881,4.881,0,0,1,65.412,108.769Z"
            transform="translate(-62.69 -66.226)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12171"
            data-name="Path 12171"
            d="M65.413,108.767l72.735-41.992c1.3-.75,2.355-.307,2.355,1V124.2L63.058,168.92V112.486A4.887,4.887,0,0,1,65.413,108.767Z"
            transform="translate(-62.687 -66.225)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12172"
            data-name="Path 12172"
            d="M65.414,108.77l72.735-41.992c1.3-.754,2.355-.307,2.355,1V124.2L63.059,168.918v-56.43A4.881,4.881,0,0,1,65.414,108.77Z"
            transform="translate(-62.684 -66.224)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12173"
            data-name="Path 12173"
            d="M65.418,108.768l72.734-41.992c1.3-.75,2.355-.307,2.355,1V124.2L63.059,168.921V112.487A4.892,4.892,0,0,1,65.418,108.768Z"
            transform="translate(-62.684 -66.222)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12174"
            data-name="Path 12174"
            d="M65.419,108.771,138.15,66.779c1.3-.754,2.359-.307,2.359,1V124.2L63.06,168.919v-56.43A4.885,4.885,0,0,1,65.419,108.771Z"
            transform="translate(-62.681 -66.221)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12175"
            data-name="Path 12175"
            d="M65.42,108.769l72.731-41.992c1.3-.75,2.359-.307,2.359,1V124.2L63.061,168.918v-56.43A4.891,4.891,0,0,1,65.42,108.769Z"
            transform="translate(-62.679 -66.22)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12176"
            data-name="Path 12176"
            d="M65.421,108.772,138.152,66.78c1.3-.754,2.359-.307,2.359,1v56.43L63.062,168.92V112.49A4.885,4.885,0,0,1,65.421,108.772Z"
            transform="translate(-62.676 -66.218)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12177"
            data-name="Path 12177"
            d="M65.422,108.772,138.153,66.78c1.3-.754,2.359-.307,2.359,1v56.43L63.063,168.92V112.49A4.892,4.892,0,0,1,65.422,108.772Z"
            transform="translate(-62.673 -66.218)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12178"
            data-name="Path 12178"
            d="M65.423,108.773l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.064,168.921v-56.43A4.885,4.885,0,0,1,65.423,108.773Z"
            transform="translate(-62.67 -66.215)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12179"
            data-name="Path 12179"
            d="M65.424,108.771l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.065,168.92V112.49A4.885,4.885,0,0,1,65.424,108.771Z"
            transform="translate(-62.667 -66.214)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12180"
            data-name="Path 12180"
            d="M65.425,108.771l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.066,168.923v-56.43A4.9,4.9,0,0,1,65.425,108.771Z"
            transform="translate(-62.665 -66.213)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12181"
            data-name="Path 12181"
            d="M65.426,108.774l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.067,168.922v-56.43A4.885,4.885,0,0,1,65.426,108.774Z"
            transform="translate(-62.662 -66.212)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12182"
            data-name="Path 12182"
            d="M65.427,108.772,138.158,66.78c1.3-.75,2.359-.3,2.359,1v56.43L63.068,168.924v-56.43A4.9,4.9,0,0,1,65.427,108.772Z"
            transform="translate(-62.659 -66.211)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12183"
            data-name="Path 12183"
            d="M65.428,108.775l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.069,168.923v-56.43A4.885,4.885,0,0,1,65.428,108.775Z"
            transform="translate(-62.656 -66.21)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12184"
            data-name="Path 12184"
            d="M65.429,108.773,138.16,66.781c1.3-.75,2.359-.3,2.359,1v56.43L63.07,168.925v-56.43A4.9,4.9,0,0,1,65.429,108.773Z"
            transform="translate(-62.653 -66.208)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12185"
            data-name="Path 12185"
            d="M65.426,108.776l72.735-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.071,168.924v-56.43A4.891,4.891,0,0,1,65.426,108.776Z"
            transform="translate(-62.651 -66.207)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12186"
            data-name="Path 12186"
            d="M65.427,108.774l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.43L63.072,168.926V112.5A4.893,4.893,0,0,1,65.427,108.774Z"
            transform="translate(-62.648 -66.205)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12187"
            data-name="Path 12187"
            d="M65.428,108.777l72.735-41.992c1.3-.753,2.355-.307,2.355,1v56.43L63.073,168.925v-56.43A4.881,4.881,0,0,1,65.428,108.777Z"
            transform="translate(-62.645 -66.204)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12188"
            data-name="Path 12188"
            d="M65.432,108.775l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.434L63.073,168.923v-56.43A4.9,4.9,0,0,1,65.432,108.775Z"
            transform="translate(-62.645 -66.202)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12189"
            data-name="Path 12189"
            d="M65.433,108.778l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.074,168.926V112.5A4.885,4.885,0,0,1,65.433,108.778Z"
            transform="translate(-62.642 -66.201)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12190"
            data-name="Path 12190"
            d="M65.434,108.776l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.075,168.929V112.495A4.9,4.9,0,0,1,65.434,108.776Z"
            transform="translate(-62.64 -66.2)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12191"
            data-name="Path 12191"
            d="M65.435,108.779l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.076,168.927V112.5A4.885,4.885,0,0,1,65.435,108.779Z"
            transform="translate(-62.637 -66.199)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12192"
            data-name="Path 12192"
            d="M65.436,108.777l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.077,168.926V112.5A4.891,4.891,0,0,1,65.436,108.777Z"
            transform="translate(-62.634 -66.197)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12193"
            data-name="Path 12193"
            d="M65.437,108.78l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.078,168.928V112.5A4.885,4.885,0,0,1,65.437,108.78Z"
            transform="translate(-62.631 -66.196)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12194"
            data-name="Path 12194"
            d="M65.438,108.778l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.079,168.927V112.5A4.892,4.892,0,0,1,65.438,108.778Z"
            transform="translate(-62.628 -66.195)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12195"
            data-name="Path 12195"
            d="M65.439,108.781,138.17,66.788c1.3-.753,2.359-.307,2.359,1v56.43L63.08,168.929V112.5A4.885,4.885,0,0,1,65.439,108.781Z"
            transform="translate(-62.626 -66.193)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12196"
            data-name="Path 12196"
            d="M65.44,108.781l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.081,168.929V112.5A4.891,4.891,0,0,1,65.44,108.781Z"
            transform="translate(-62.623 -66.193)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12197"
            data-name="Path 12197"
            d="M65.441,108.783l72.731-42c1.3-.75,2.359-.3,2.359,1v56.43L63.082,168.931V112.5A4.885,4.885,0,0,1,65.441,108.783Z"
            transform="translate(-62.62 -66.191)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12198"
            data-name="Path 12198"
            d="M65.442,108.782l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.083,168.93V112.5A4.885,4.885,0,0,1,65.442,108.782Z"
            transform="translate(-62.617 -66.19)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12199"
            data-name="Path 12199"
            d="M65.443,108.78l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.084,168.932V112.5A4.9,4.9,0,0,1,65.443,108.78Z"
            transform="translate(-62.614 -66.188)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12200"
            data-name="Path 12200"
            d="M65.44,108.783l72.735-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.085,168.931V112.5A4.891,4.891,0,0,1,65.44,108.783Z"
            transform="translate(-62.612 -66.187)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12201"
            data-name="Path 12201"
            d="M65.441,108.781l72.735-41.992c1.3-.75,2.355-.3,2.355,1v56.43L63.086,168.933V112.5A4.893,4.893,0,0,1,65.441,108.781Z"
            transform="translate(-62.609 -66.185)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12202"
            data-name="Path 12202"
            d="M65.442,108.784l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.087,168.932V112.5A4.881,4.881,0,0,1,65.442,108.784Z"
            transform="translate(-62.606 -66.185)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12203"
            data-name="Path 12203"
            d="M65.443,108.782,138.178,66.79c1.3-.75,2.355-.3,2.355,1v56.43L63.088,168.934V112.5A4.893,4.893,0,0,1,65.443,108.782Z"
            transform="translate(-62.603 -66.183)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12204"
            data-name="Path 12204"
            d="M65.447,108.785l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.088,168.933V112.5A4.885,4.885,0,0,1,65.447,108.785Z"
            transform="translate(-62.603 -66.182)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12205"
            data-name="Path 12205"
            d="M65.448,108.783l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.089,168.935V112.5A4.9,4.9,0,0,1,65.448,108.783Z"
            transform="translate(-62.601 -66.18)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12206"
            data-name="Path 12206"
            d="M65.449,108.786,138.18,66.793c1.3-.754,2.359-.307,2.359,1v56.43L63.09,168.934V112.5A4.885,4.885,0,0,1,65.449,108.786Z"
            transform="translate(-62.598 -66.179)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12207"
            data-name="Path 12207"
            d="M65.45,108.784l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.434L63.091,168.933V112.5A4.9,4.9,0,0,1,65.45,108.784Z"
            transform="translate(-62.595 -66.178)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12208"
            data-name="Path 12208"
            d="M65.451,108.787l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.092,168.935V112.5A4.885,4.885,0,0,1,65.451,108.787Z"
            transform="translate(-62.592 -66.176)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12209"
            data-name="Path 12209"
            d="M65.452,108.785l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.093,168.938V112.5A4.891,4.891,0,0,1,65.452,108.785Z"
            transform="translate(-62.589 -66.175)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12210"
            data-name="Path 12210"
            d="M65.453,108.788,138.184,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.094,168.936v-56.43A4.885,4.885,0,0,1,65.453,108.788Z"
            transform="translate(-62.587 -66.173)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12211"
            data-name="Path 12211"
            d="M65.454,108.786l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.1,168.935V112.5A4.892,4.892,0,0,1,65.454,108.786Z"
            transform="translate(-62.584 -66.172)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12212"
            data-name="Path 12212"
            d="M65.455,108.789,138.186,66.8c1.3-.753,2.359-.307,2.359,1v56.43L63.1,168.937v-56.43A4.885,4.885,0,0,1,65.455,108.789Z"
            transform="translate(-62.581 -66.171)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12213"
            data-name="Path 12213"
            d="M65.456,108.789,138.187,66.8c1.3-.753,2.359-.307,2.359,1v56.43L63.1,168.937v-56.43A4.891,4.891,0,0,1,65.456,108.789Z"
            transform="translate(-62.578 -66.171)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12214"
            data-name="Path 12214"
            d="M65.457,108.79,138.188,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.1,168.938v-56.43A4.885,4.885,0,0,1,65.457,108.79Z"
            transform="translate(-62.575 -66.168)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12215"
            data-name="Path 12215"
            d="M65.454,108.79,138.189,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.1,168.938v-56.43A4.891,4.891,0,0,1,65.454,108.79Z"
            transform="translate(-62.573 -66.168)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12216"
            data-name="Path 12216"
            d="M65.455,108.788,138.19,66.8c1.3-.75,2.355-.3,2.355,1v56.43L63.1,168.94V112.51A4.893,4.893,0,0,1,65.455,108.788Z"
            transform="translate(-62.57 -66.166)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12217"
            data-name="Path 12217"
            d="M65.456,108.791,138.191,66.8c1.3-.754,2.355-.307,2.355,1v56.43L63.1,168.939v-56.43A4.881,4.881,0,0,1,65.456,108.791Z"
            transform="translate(-62.567 -66.165)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12218"
            data-name="Path 12218"
            d="M65.457,108.789,138.192,66.8c1.3-.75,2.355-.3,2.355,1v56.43L63.1,168.941v-56.43A4.893,4.893,0,0,1,65.457,108.789Z"
            transform="translate(-62.564 -66.163)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12219"
            data-name="Path 12219"
            d="M65.461,108.792,138.2,66.8c1.3-.754,2.355-.307,2.355,1v56.43L63.1,168.94V112.51A4.885,4.885,0,0,1,65.461,108.792Z"
            transform="translate(-62.564 -66.162)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12220"
            data-name="Path 12220"
            d="M65.462,108.79,138.193,66.8c1.3-.75,2.359-.3,2.359,1v56.43L63.1,168.942v-56.43A4.9,4.9,0,0,1,65.462,108.79Z"
            transform="translate(-62.562 -66.16)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12221"
            data-name="Path 12221"
            d="M65.463,108.793,138.194,66.8c1.3-.753,2.359-.307,2.359,1v56.43L63.1,168.941v-56.43A4.885,4.885,0,0,1,65.463,108.793Z"
            transform="translate(-62.559 -66.16)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12222"
            data-name="Path 12222"
            d="M65.464,108.791,138.195,66.8c1.3-.75,2.359-.3,2.359,1v56.434L63.1,168.943V112.509A4.9,4.9,0,0,1,65.464,108.791Z"
            transform="translate(-62.556 -66.158)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12223"
            data-name="Path 12223"
            d="M65.465,108.794,138.2,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.106,168.942v-56.43A4.885,4.885,0,0,1,65.465,108.794Z"
            transform="translate(-62.553 -66.157)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12224"
            data-name="Path 12224"
            d="M65.466,108.792,138.2,66.8c1.3-.75,2.359-.3,2.359,1v56.43L63.107,168.94V112.51A4.9,4.9,0,0,1,65.466,108.792Z"
            transform="translate(-62.55 -66.155)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12225"
            data-name="Path 12225"
            d="M65.467,108.795,138.2,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.108,168.943v-56.43A4.885,4.885,0,0,1,65.467,108.795Z"
            transform="translate(-62.548 -66.154)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12226"
            data-name="Path 12226"
            d="M65.468,108.793,138.2,66.8c1.3-.75,2.359-.307,2.359,1v56.434L63.109,168.942v-56.43A4.9,4.9,0,0,1,65.468,108.793Z"
            transform="translate(-62.545 -66.153)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12227"
            data-name="Path 12227"
            d="M65.469,108.8,138.2,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.11,168.944v-56.43A4.885,4.885,0,0,1,65.469,108.8Z"
            transform="translate(-62.542 -66.151)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12228"
            data-name="Path 12228"
            d="M65.47,108.794,138.2,66.8c1.3-.75,2.359-.307,2.359,1v56.43L63.111,168.943v-56.43A4.892,4.892,0,0,1,65.47,108.794Z"
            transform="translate(-62.539 -66.15)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12229"
            data-name="Path 12229"
            d="M65.471,108.8,138.2,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.112,168.945v-56.43A4.885,4.885,0,0,1,65.471,108.8Z"
            transform="translate(-62.536 -66.148)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12230"
            data-name="Path 12230"
            d="M65.468,108.8,138.2,66.8c1.3-.754,2.359-.307,2.359,1v56.43L63.113,168.945v-56.43A4.9,4.9,0,0,1,65.468,108.8Z"
            transform="translate(-62.534 -66.148)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12231"
            data-name="Path 12231"
            d="M65.469,108.8,138.2,66.805c1.3-.754,2.355-.307,2.355,1v56.43L63.114,168.946v-56.43A4.881,4.881,0,0,1,65.469,108.8Z"
            transform="translate(-62.531 -66.146)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12232"
            data-name="Path 12232"
            d="M65.47,108.8,138.2,66.805c1.3-.754,2.355-.307,2.355,1v56.43L63.115,168.946v-56.43A4.887,4.887,0,0,1,65.47,108.8Z"
            transform="translate(-62.528 -66.146)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12233"
            data-name="Path 12233"
            d="M65.471,108.795l72.734-41.988c1.3-.754,2.355-.307,2.355,1v56.43L63.116,168.947v-56.43A4.893,4.893,0,0,1,65.471,108.795Z"
            transform="translate(-62.525 -66.143)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12234"
            data-name="Path 12234"
            d="M65.475,108.8l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.116,168.947v-56.43A4.885,4.885,0,0,1,65.475,108.8Z"
            transform="translate(-62.525 -66.143)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12235"
            data-name="Path 12235"
            d="M65.476,108.8,138.207,66.8c1.3-.75,2.359-.3,2.359,1v56.43L63.117,168.949v-56.43A4.9,4.9,0,0,1,65.476,108.8Z"
            transform="translate(-62.523 -66.141)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12236"
            data-name="Path 12236"
            d="M65.477,108.8l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.118,168.948v-56.43A4.885,4.885,0,0,1,65.477,108.8Z"
            transform="translate(-62.52 -66.14)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12237"
            data-name="Path 12237"
            d="M65.478,108.8l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.119,168.95V112.52A4.9,4.9,0,0,1,65.478,108.8Z"
            transform="translate(-62.517 -66.138)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12238"
            data-name="Path 12238"
            d="M65.479,108.8,138.21,66.809c1.3-.754,2.359-.307,2.359,1v56.43L63.12,168.949v-56.43A4.885,4.885,0,0,1,65.479,108.8Z"
            transform="translate(-62.514 -66.137)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12239"
            data-name="Path 12239"
            d="M65.48,108.8l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.121,168.951v-56.43A4.9,4.9,0,0,1,65.48,108.8Z"
            transform="translate(-62.511 -66.135)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12240"
            data-name="Path 12240"
            d="M65.481,108.8l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.122,168.95V112.52A4.885,4.885,0,0,1,65.481,108.8Z"
            transform="translate(-62.509 -66.134)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12241"
            data-name="Path 12241"
            d="M65.482,108.8l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.434L63.123,168.952V112.518A4.9,4.9,0,0,1,65.482,108.8Z"
            transform="translate(-62.506 -66.133)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12242"
            data-name="Path 12242"
            d="M65.483,108.8l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.124,168.951v-56.43A4.885,4.885,0,0,1,65.483,108.8Z"
            transform="translate(-62.503 -66.132)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12243"
            data-name="Path 12243"
            d="M65.484,108.8l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.434L63.125,168.949v-56.43A4.9,4.9,0,0,1,65.484,108.8Z"
            transform="translate(-62.5 -66.13)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12244"
            data-name="Path 12244"
            d="M65.485,108.8l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.126,168.952v-56.43A4.885,4.885,0,0,1,65.485,108.8Z"
            transform="translate(-62.497 -66.129)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12245"
            data-name="Path 12245"
            d="M65.486,108.8,138.217,66.81c1.3-.75,2.359-.307,2.359,1v56.43L63.127,168.951v-56.43A4.9,4.9,0,0,1,65.486,108.8Z"
            transform="translate(-62.495 -66.128)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12246"
            data-name="Path 12246"
            d="M65.483,108.8l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.128,168.953v-56.43A4.891,4.891,0,0,1,65.483,108.8Z"
            transform="translate(-62.492 -66.126)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12247"
            data-name="Path 12247"
            d="M65.484,108.8l72.735-41.992c1.3-.75,2.355-.307,2.355,1v56.43L63.129,168.952v-56.43A4.887,4.887,0,0,1,65.484,108.8Z"
            transform="translate(-62.489 -66.125)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12248"
            data-name="Path 12248"
            d="M65.485,108.8,138.22,66.813c1.3-.754,2.355-.307,2.355,1v56.43L63.13,168.954v-56.43A4.893,4.893,0,0,1,65.485,108.8Z"
            transform="translate(-62.486 -66.123)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12249"
            data-name="Path 12249"
            d="M65.489,108.806l72.735-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.13,168.954v-56.43A4.892,4.892,0,0,1,65.489,108.806Z"
            transform="translate(-62.486 -66.123)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12250"
            data-name="Path 12250"
            d="M65.49,108.808l72.731-42c1.3-.75,2.359-.3,2.359,1v56.43L63.131,168.956v-56.43A4.885,4.885,0,0,1,65.49,108.808Z"
            transform="translate(-62.483 -66.121)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12251"
            data-name="Path 12251"
            d="M65.491,108.807l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.132,168.955v-56.43A4.891,4.891,0,0,1,65.491,108.807Z"
            transform="translate(-62.481 -66.121)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12252"
            data-name="Path 12252"
            d="M65.492,108.8l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.133,168.956v-56.43A4.9,4.9,0,0,1,65.492,108.8Z"
            transform="translate(-62.478 -66.118)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12253"
            data-name="Path 12253"
            d="M65.493,108.808l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.134,168.956v-56.43A4.885,4.885,0,0,1,65.493,108.808Z"
            transform="translate(-62.475 -66.118)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12254"
            data-name="Path 12254"
            d="M65.494,108.806l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.135,168.958v-56.43A4.9,4.9,0,0,1,65.494,108.806Z"
            transform="translate(-62.472 -66.116)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12255"
            data-name="Path 12255"
            d="M65.495,108.809l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.136,168.957v-56.43A4.885,4.885,0,0,1,65.495,108.809Z"
            transform="translate(-62.47 -66.115)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12256"
            data-name="Path 12256"
            d="M65.5,108.807l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.137,168.959v-56.43A4.9,4.9,0,0,1,65.5,108.807Z"
            transform="translate(-62.467 -66.113)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12257"
            data-name="Path 12257"
            d="M65.5,108.81l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.138,168.958v-56.43A4.885,4.885,0,0,1,65.5,108.81Z"
            transform="translate(-62.464 -66.112)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12258"
            data-name="Path 12258"
            d="M65.5,108.808l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.434L63.139,168.96V112.526A4.9,4.9,0,0,1,65.5,108.808Z"
            transform="translate(-62.461 -66.11)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12259"
            data-name="Path 12259"
            d="M65.5,108.811,138.23,66.819c1.3-.754,2.359-.307,2.359,1v56.43L63.14,168.959v-56.43A4.885,4.885,0,0,1,65.5,108.811Z"
            transform="translate(-62.458 -66.109)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12260"
            data-name="Path 12260"
            d="M65.5,108.809l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.141,168.958v-56.43A4.9,4.9,0,0,1,65.5,108.809Z"
            transform="translate(-62.456 -66.108)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12261"
            data-name="Path 12261"
            d="M65.5,108.812,138.232,66.82c1.3-.754,2.359-.307,2.359,1v56.43L63.142,168.96V112.53A4.891,4.891,0,0,1,65.5,108.812Z"
            transform="translate(-62.453 -66.107)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12262"
            data-name="Path 12262"
            d="M65.5,108.81l72.735-41.992c1.3-.75,2.355-.3,2.355,1v56.434L63.143,168.958v-56.43A4.893,4.893,0,0,1,65.5,108.81Z"
            transform="translate(-62.45 -66.105)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12263"
            data-name="Path 12263"
            d="M65.5,108.813l72.735-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.144,168.961v-56.43A4.881,4.881,0,0,1,65.5,108.813Z"
            transform="translate(-62.447 -66.104)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12264"
            data-name="Path 12264"
            d="M65.5,108.811l72.735-41.992c1.3-.75,2.355-.307,2.355,1v56.43L63.145,168.96V112.53A4.887,4.887,0,0,1,65.5,108.811Z"
            transform="translate(-62.444 -66.103)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12265"
            data-name="Path 12265"
            d="M65.5,108.81l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.145,168.962v-56.43A4.9,4.9,0,0,1,65.5,108.81Z"
            transform="translate(-62.444 -66.101)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12266"
            data-name="Path 12266"
            d="M65.5,108.812,138.236,66.82c1.3-.75,2.359-.307,2.359,1v56.43L63.146,168.961v-56.43A4.891,4.891,0,0,1,65.5,108.812Z"
            transform="translate(-62.442 -66.1)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12267"
            data-name="Path 12267"
            d="M65.506,108.811l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.147,168.963v-56.43A4.9,4.9,0,0,1,65.506,108.811Z"
            transform="translate(-62.439 -66.098)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12268"
            data-name="Path 12268"
            d="M65.507,108.815l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.148,168.963v-56.43A4.892,4.892,0,0,1,65.507,108.815Z"
            transform="translate(-62.436 -66.098)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12269"
            data-name="Path 12269"
            d="M65.508,108.813l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.149,168.965v-56.43A4.9,4.9,0,0,1,65.508,108.813Z"
            transform="translate(-62.433 -66.096)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12270"
            data-name="Path 12270"
            d="M65.509,108.816,138.24,66.823c1.3-.753,2.359-.307,2.359,1v56.43L63.15,168.964v-56.43A4.885,4.885,0,0,1,65.509,108.816Z"
            transform="translate(-62.431 -66.095)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12271"
            data-name="Path 12271"
            d="M65.51,108.813l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.151,168.965v-56.43A4.9,4.9,0,0,1,65.51,108.813Z"
            transform="translate(-62.428 -66.093)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12272"
            data-name="Path 12272"
            d="M65.511,108.817l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.152,168.965v-56.43A4.885,4.885,0,0,1,65.511,108.817Z"
            transform="translate(-62.425 -66.093)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12273"
            data-name="Path 12273"
            d="M65.512,108.815l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.153,168.967v-56.43A4.9,4.9,0,0,1,65.512,108.815Z"
            transform="translate(-62.422 -66.091)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12274"
            data-name="Path 12274"
            d="M65.513,108.818l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.154,168.966v-56.43A4.885,4.885,0,0,1,65.513,108.818Z"
            transform="translate(-62.419 -66.09)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12275"
            data-name="Path 12275"
            d="M65.514,108.816l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.434L63.155,168.968V112.534A4.9,4.9,0,0,1,65.514,108.816Z"
            transform="translate(-62.417 -66.088)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12276"
            data-name="Path 12276"
            d="M65.511,108.819l72.735-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.156,168.967v-56.43A4.891,4.891,0,0,1,65.511,108.819Z"
            transform="translate(-62.414 -66.087)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12277"
            data-name="Path 12277"
            d="M65.512,108.817l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.434L63.157,168.965v-56.43A4.893,4.893,0,0,1,65.512,108.817Z"
            transform="translate(-62.411 -66.085)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12278"
            data-name="Path 12278"
            d="M65.513,108.82l72.735-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.158,168.968v-56.43A4.881,4.881,0,0,1,65.513,108.82Z"
            transform="translate(-62.408 -66.084)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12279"
            data-name="Path 12279"
            d="M65.514,108.818l72.735-41.992c1.3-.75,2.355-.307,2.355,1v56.434L63.159,168.967v-56.43A4.893,4.893,0,0,1,65.514,108.818Z"
            transform="translate(-62.405 -66.083)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12280"
            data-name="Path 12280"
            d="M65.518,108.821l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.159,168.969v-56.43A4.885,4.885,0,0,1,65.518,108.821Z"
            transform="translate(-62.405 -66.082)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12281"
            data-name="Path 12281"
            d="M65.519,108.819,138.25,66.827c1.3-.75,2.359-.307,2.359,1v56.43L63.16,168.968v-56.43A4.892,4.892,0,0,1,65.519,108.819Z"
            transform="translate(-62.403 -66.08)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12282"
            data-name="Path 12282"
            d="M65.52,108.822l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.161,168.97V112.54A4.885,4.885,0,0,1,65.52,108.822Z"
            transform="translate(-62.4 -66.079)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12283"
            data-name="Path 12283"
            d="M65.521,108.822l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.162,168.97V112.54A4.891,4.891,0,0,1,65.521,108.822Z"
            transform="translate(-62.397 -66.079)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12284"
            data-name="Path 12284"
            d="M65.522,108.819l72.731-41.988c1.3-.753,2.359-.307,2.359,1v56.43L63.163,168.971v-56.43A4.9,4.9,0,0,1,65.522,108.819Z"
            transform="translate(-62.394 -66.076)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12285"
            data-name="Path 12285"
            d="M65.523,108.821l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.164,168.97V112.54A4.892,4.892,0,0,1,65.523,108.821Z"
            transform="translate(-62.392 -66.075)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12286"
            data-name="Path 12286"
            d="M65.524,108.821l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.165,168.973v-56.43A4.9,4.9,0,0,1,65.524,108.821Z"
            transform="translate(-62.389 -66.074)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12287"
            data-name="Path 12287"
            d="M65.525,108.824l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.166,168.972v-56.43A4.891,4.891,0,0,1,65.525,108.824Z"
            transform="translate(-62.386 -66.073)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12288"
            data-name="Path 12288"
            d="M65.526,108.821l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.167,168.973v-56.43A4.9,4.9,0,0,1,65.526,108.821Z"
            transform="translate(-62.383 -66.07)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12289"
            data-name="Path 12289"
            d="M65.527,108.825l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.168,168.973v-56.43A4.885,4.885,0,0,1,65.527,108.825Z"
            transform="translate(-62.38 -66.07)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12290"
            data-name="Path 12290"
            d="M65.528,108.823l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.169,168.975v-56.43A4.9,4.9,0,0,1,65.528,108.823Z"
            transform="translate(-62.378 -66.068)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12291"
            data-name="Path 12291"
            d="M65.525,108.826,138.26,66.834c1.3-.754,2.359-.307,2.359,1v56.43L63.17,168.974v-56.43A4.891,4.891,0,0,1,65.525,108.826Z"
            transform="translate(-62.375 -66.068)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12292"
            data-name="Path 12292"
            d="M65.526,108.824l72.735-41.992c1.3-.75,2.355-.3,2.355,1v56.43L63.171,168.976v-56.43A4.893,4.893,0,0,1,65.526,108.824Z"
            transform="translate(-62.372 -66.066)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12293"
            data-name="Path 12293"
            d="M65.527,108.827l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.172,168.975v-56.43A4.881,4.881,0,0,1,65.527,108.827Z"
            transform="translate(-62.369 -66.065)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12294"
            data-name="Path 12294"
            d="M65.528,108.825l72.735-41.992c1.3-.75,2.355-.3,2.355,1v56.434L63.173,168.977v-56.43A4.893,4.893,0,0,1,65.528,108.825Z"
            transform="translate(-62.366 -66.063)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12295"
            data-name="Path 12295"
            d="M65.532,108.828l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.173,168.976v-56.43A4.885,4.885,0,0,1,65.532,108.828Z"
            transform="translate(-62.366 -66.062)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12296"
            data-name="Path 12296"
            d="M65.533,108.826l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.434L63.174,168.975v-56.43A4.891,4.891,0,0,1,65.533,108.826Z"
            transform="translate(-62.364 -66.061)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12297"
            data-name="Path 12297"
            d="M65.534,108.829l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.175,168.977v-56.43A4.885,4.885,0,0,1,65.534,108.829Z"
            transform="translate(-62.361 -66.059)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12298"
            data-name="Path 12298"
            d="M65.535,108.827l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.176,168.976v-56.43A4.9,4.9,0,0,1,65.535,108.827Z"
            transform="translate(-62.358 -66.058)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12299"
            data-name="Path 12299"
            d="M65.536,108.83l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.177,168.978v-56.43A4.885,4.885,0,0,1,65.536,108.83Z"
            transform="translate(-62.355 -66.056)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12300"
            data-name="Path 12300"
            d="M65.537,108.828l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.178,168.977v-56.43A4.891,4.891,0,0,1,65.537,108.828Z"
            transform="translate(-62.353 -66.055)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12301"
            data-name="Path 12301"
            d="M65.538,108.827l72.731-41.988c1.3-.753,2.359-.307,2.359,1v56.43L63.179,168.979v-56.43A4.9,4.9,0,0,1,65.538,108.827Z"
            transform="translate(-62.35 -66.054)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12302"
            data-name="Path 12302"
            d="M65.539,108.829,138.27,66.837c1.3-.75,2.359-.307,2.359,1v56.43L63.18,168.978v-56.43A4.892,4.892,0,0,1,65.539,108.829Z"
            transform="translate(-62.347 -66.052)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12303"
            data-name="Path 12303"
            d="M65.54,108.828,138.271,66.84c1.3-.753,2.359-.307,2.359,1v56.43L63.181,168.98V112.55A4.9,4.9,0,0,1,65.54,108.828Z"
            transform="translate(-62.344 -66.051)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12304"
            data-name="Path 12304"
            d="M65.541,108.832,138.272,66.84c1.3-.753,2.359-.307,2.359,1v56.43L63.182,168.98V112.55A4.891,4.891,0,0,1,65.541,108.832Z"
            transform="translate(-62.341 -66.051)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12305"
            data-name="Path 12305"
            d="M65.542,108.83l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.183,168.982v-56.43A4.9,4.9,0,0,1,65.542,108.83Z"
            transform="translate(-62.339 -66.049)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12306"
            data-name="Path 12306"
            d="M65.543,108.833,138.274,66.84c1.3-.754,2.359-.307,2.359,1v56.43L63.184,168.981v-56.43A4.892,4.892,0,0,1,65.543,108.833Z"
            transform="translate(-62.336 -66.048)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12307"
            data-name="Path 12307"
            d="M65.54,108.831l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.43L63.185,168.983v-56.43A4.9,4.9,0,0,1,65.54,108.831Z"
            transform="translate(-62.333 -66.046)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12308"
            data-name="Path 12308"
            d="M65.541,108.834l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.186,168.982v-56.43A4.881,4.881,0,0,1,65.541,108.834Z"
            transform="translate(-62.33 -66.045)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12309"
            data-name="Path 12309"
            d="M65.542,108.832,138.277,66.84c1.3-.75,2.355-.3,2.355,1v56.43L63.187,168.984v-56.43A4.893,4.893,0,0,1,65.542,108.832Z"
            transform="translate(-62.327 -66.043)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12310"
            data-name="Path 12310"
            d="M65.546,108.835,138.28,66.842c1.3-.753,2.355-.307,2.355,1v56.43L63.187,168.983v-56.43A4.885,4.885,0,0,1,65.546,108.835Z"
            transform="translate(-62.327 -66.043)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12311"
            data-name="Path 12311"
            d="M65.547,108.833l72.731-41.992c1.3-.75,2.359-.3,2.359,1V124.27L63.188,168.985v-56.43A4.9,4.9,0,0,1,65.547,108.833Z"
            transform="translate(-62.325 -66.041)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12312"
            data-name="Path 12312"
            d="M65.548,108.836l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.189,168.984v-56.43A4.885,4.885,0,0,1,65.548,108.836Z"
            transform="translate(-62.322 -66.04)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12313"
            data-name="Path 12313"
            d="M65.549,108.834,138.28,66.842c1.3-.75,2.359-.307,2.359,1v56.43L63.19,168.983v-56.43A4.891,4.891,0,0,1,65.549,108.834Z"
            transform="translate(-62.319 -66.039)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12314"
            data-name="Path 12314"
            d="M65.55,108.837l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.191,168.985v-56.43A4.885,4.885,0,0,1,65.55,108.837Z"
            transform="translate(-62.316 -66.037)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12315"
            data-name="Path 12315"
            d="M65.551,108.835l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.434L63.192,168.984v-56.43A4.892,4.892,0,0,1,65.551,108.835Z"
            transform="translate(-62.314 -66.036)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12316"
            data-name="Path 12316"
            d="M65.552,108.838l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.193,168.986v-56.43A4.885,4.885,0,0,1,65.552,108.838Z"
            transform="translate(-62.311 -66.034)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12317"
            data-name="Path 12317"
            d="M65.553,108.836l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.194,168.985v-56.43A4.891,4.891,0,0,1,65.553,108.836Z"
            transform="translate(-62.308 -66.033)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12318"
            data-name="Path 12318"
            d="M65.554,108.835l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.195,168.987v-56.43A4.9,4.9,0,0,1,65.554,108.835Z"
            transform="translate(-62.305 -66.031)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12319"
            data-name="Path 12319"
            d="M65.555,108.839l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.2,168.987v-56.43A4.891,4.891,0,0,1,65.555,108.839Z"
            transform="translate(-62.302 -66.031)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12320"
            data-name="Path 12320"
            d="M65.556,108.836l72.731-41.988c1.3-.754,2.359-.307,2.359,1v56.43L63.2,168.988v-56.43A4.9,4.9,0,0,1,65.556,108.836Z"
            transform="translate(-62.3 -66.029)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12321"
            data-name="Path 12321"
            d="M65.557,108.838l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.2,168.987v-56.43A4.891,4.891,0,0,1,65.557,108.838Z"
            transform="translate(-62.297 -66.027)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12322"
            data-name="Path 12322"
            d="M65.554,108.838l72.734-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.2,168.99V112.56A4.9,4.9,0,0,1,65.554,108.838Z"
            transform="translate(-62.294 -66.027)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12323"
            data-name="Path 12323"
            d="M65.555,108.841,138.29,66.848c1.3-.754,2.355-.307,2.355,1v56.43L63.2,168.989v-56.43A4.887,4.887,0,0,1,65.555,108.841Z"
            transform="translate(-62.291 -66.026)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12324"
            data-name="Path 12324"
            d="M65.556,108.839l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.43L63.2,168.991v-56.43A4.893,4.893,0,0,1,65.556,108.839Z"
            transform="translate(-62.288 -66.024)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12325"
            data-name="Path 12325"
            d="M65.557,108.842l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.2,168.99V112.56A4.881,4.881,0,0,1,65.557,108.842Z"
            transform="translate(-62.286 -66.023)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12326"
            data-name="Path 12326"
            d="M65.561,108.84l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.2,168.992v-56.43A4.9,4.9,0,0,1,65.561,108.84Z"
            transform="translate(-62.286 -66.021)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12327"
            data-name="Path 12327"
            d="M65.562,108.843,138.293,66.85c1.3-.754,2.359-.307,2.359,1v56.43L63.2,168.991v-56.43A4.885,4.885,0,0,1,65.562,108.843Z"
            transform="translate(-62.283 -66.02)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12328"
            data-name="Path 12328"
            d="M65.563,108.841l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.2,168.993v-56.43A4.9,4.9,0,0,1,65.563,108.841Z"
            transform="translate(-62.28 -66.018)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12329"
            data-name="Path 12329"
            d="M65.564,108.844l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.2,168.992v-56.43A4.885,4.885,0,0,1,65.564,108.844Z"
            transform="translate(-62.277 -66.017)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12330"
            data-name="Path 12330"
            d="M65.565,108.842,138.3,66.85c1.3-.75,2.359-.3,2.359,1v56.43L63.206,168.99V112.564A4.9,4.9,0,0,1,65.565,108.842Z"
            transform="translate(-62.275 -66.016)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12331"
            data-name="Path 12331"
            d="M65.566,108.845,138.3,66.852c1.3-.754,2.359-.307,2.359,1v56.43L63.207,168.993v-56.43A4.885,4.885,0,0,1,65.566,108.845Z"
            transform="translate(-62.272 -66.015)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12332"
            data-name="Path 12332"
            d="M65.567,108.843,138.3,66.851c1.3-.75,2.359-.307,2.359,1v56.43L63.208,168.992v-56.43A4.892,4.892,0,0,1,65.567,108.843Z"
            transform="translate(-62.269 -66.013)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12333"
            data-name="Path 12333"
            d="M65.568,108.846,138.3,66.854c1.3-.754,2.359-.307,2.359,1v56.43L63.209,168.994v-56.43A4.885,4.885,0,0,1,65.568,108.846Z"
            transform="translate(-62.266 -66.012)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12334"
            data-name="Path 12334"
            d="M65.569,108.844,138.3,66.852c1.3-.75,2.359-.307,2.359,1v56.43L63.21,168.993v-56.43A4.9,4.9,0,0,1,65.569,108.844Z"
            transform="translate(-62.263 -66.011)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12335"
            data-name="Path 12335"
            d="M65.57,108.847,138.3,66.854c1.3-.753,2.359-.307,2.359,1v56.43L63.211,169v-56.43A4.885,4.885,0,0,1,65.57,108.847Z"
            transform="translate(-62.261 -66.009)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12336"
            data-name="Path 12336"
            d="M65.571,108.845,138.3,66.853c1.3-.75,2.359-.307,2.359,1v56.43L63.212,168.994v-56.43A4.892,4.892,0,0,1,65.571,108.845Z"
            transform="translate(-62.258 -66.008)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12337"
            data-name="Path 12337"
            d="M65.568,108.844,138.3,66.855c1.3-.754,2.359-.307,2.359,1v56.43L63.213,169v-56.43A4.9,4.9,0,0,1,65.568,108.844Z"
            transform="translate(-62.255 -66.006)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12338"
            data-name="Path 12338"
            d="M65.569,108.848,138.3,66.855c1.3-.754,2.355-.307,2.355,1v56.43L63.214,169v-56.43A4.887,4.887,0,0,1,65.569,108.848Z"
            transform="translate(-62.252 -66.006)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12339"
            data-name="Path 12339"
            d="M65.57,108.846,138.3,66.854c1.3-.75,2.355-.3,2.355,1v56.43L63.215,169v-56.43A4.893,4.893,0,0,1,65.57,108.846Z"
            transform="translate(-62.249 -66.004)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12340"
            data-name="Path 12340"
            d="M65.571,108.849l72.734-41.992c1.3-.754,2.355-.307,2.355,1v56.43L63.216,169v-56.43A4.887,4.887,0,0,1,65.571,108.849Z"
            transform="translate(-62.247 -66.004)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12341"
            data-name="Path 12341"
            d="M65.575,108.847l72.734-41.992c1.3-.75,2.355-.3,2.355,1v56.43L63.216,169v-56.43A4.9,4.9,0,0,1,65.575,108.847Z"
            transform="translate(-62.247 -66.002)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12342"
            data-name="Path 12342"
            d="M65.576,108.85l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.217,169v-56.43A4.885,4.885,0,0,1,65.576,108.85Z"
            transform="translate(-62.244 -66.001)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12343"
            data-name="Path 12343"
            d="M65.577,108.848l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.218,169V112.57A4.9,4.9,0,0,1,65.577,108.848Z"
            transform="translate(-62.241 -65.999)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12344"
            data-name="Path 12344"
            d="M65.578,108.851l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.219,169v-56.43A4.885,4.885,0,0,1,65.578,108.851Z"
            transform="translate(-62.238 -65.998)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12345"
            data-name="Path 12345"
            d="M65.579,108.849,138.31,66.857c1.3-.75,2.359-.3,2.359,1v56.43L63.22,169v-56.43A4.9,4.9,0,0,1,65.579,108.849Z"
            transform="translate(-62.235 -65.996)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12346"
            data-name="Path 12346"
            d="M65.58,108.852,138.311,66.86c1.3-.754,2.359-.307,2.359,1v56.43L63.221,169V112.57A4.885,4.885,0,0,1,65.58,108.852Z"
            transform="translate(-62.233 -65.995)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12347"
            data-name="Path 12347"
            d="M65.581,108.85l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.222,169v-56.43A4.9,4.9,0,0,1,65.581,108.85Z"
            transform="translate(-62.23 -65.993)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12348"
            data-name="Path 12348"
            d="M65.582,108.853,138.313,66.86c1.3-.754,2.359-.307,2.359,1v56.43L63.223,169v-56.43A4.885,4.885,0,0,1,65.582,108.853Z"
            transform="translate(-62.227 -65.992)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12349"
            data-name="Path 12349"
            d="M65.583,108.851l72.731-41.992c1.3-.75,2.359-.307,2.359,1v56.43L63.224,169V112.574A4.892,4.892,0,0,1,65.583,108.851Z"
            transform="translate(-62.224 -65.991)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12350"
            data-name="Path 12350"
            d="M65.584,108.854l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.225,169v-56.43A4.885,4.885,0,0,1,65.584,108.854Z"
            transform="translate(-62.222 -65.99)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12351"
            data-name="Path 12351"
            d="M65.585,108.852,138.316,66.86c1.3-.75,2.359-.307,2.359,1v56.43L63.226,169v-56.43A4.892,4.892,0,0,1,65.585,108.852Z"
            transform="translate(-62.219 -65.988)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12352"
            data-name="Path 12352"
            d="M65.582,108.855l72.735-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.227,169v-56.43A4.891,4.891,0,0,1,65.582,108.855Z"
            transform="translate(-62.216 -65.987)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12353"
            data-name="Path 12353"
            d="M65.583,108.853l72.735-41.992c1.3-.75,2.355-.307,2.355,1v56.43L63.228,169v-56.43A4.887,4.887,0,0,1,65.583,108.853Z"
            transform="translate(-62.213 -65.986)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12354"
            data-name="Path 12354"
            d="M65.584,108.852l72.735-41.988c1.3-.754,2.355-.307,2.355,1v56.43L63.229,169v-56.43A4.893,4.893,0,0,1,65.584,108.852Z"
            transform="translate(-62.21 -65.984)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12355"
            data-name="Path 12355"
            d="M65.585,108.856,138.32,66.864c1.3-.754,2.355-.307,2.355,1v56.43L63.23,169v-56.43A4.887,4.887,0,0,1,65.585,108.856Z"
            transform="translate(-62.208 -65.984)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12356"
            data-name="Path 12356"
            d="M65.589,108.853l72.735-41.988c1.3-.754,2.355-.307,2.355,1v56.43L63.23,169.005v-56.43A4.9,4.9,0,0,1,65.589,108.853Z"
            transform="translate(-62.208 -65.981)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12357"
            data-name="Path 12357"
            d="M65.59,108.857l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.231,169.005v-56.43A4.885,4.885,0,0,1,65.59,108.857Z"
            transform="translate(-62.205 -65.981)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12358"
            data-name="Path 12358"
            d="M65.591,108.855l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.232,169.007v-56.43A4.9,4.9,0,0,1,65.591,108.855Z"
            transform="translate(-62.202 -65.979)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12359"
            data-name="Path 12359"
            d="M65.592,108.858l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.233,169.006v-56.43A4.892,4.892,0,0,1,65.592,108.858Z"
            transform="translate(-62.199 -65.978)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12360"
            data-name="Path 12360"
            d="M65.593,108.856l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.234,169.008v-56.43A4.9,4.9,0,0,1,65.593,108.856Z"
            transform="translate(-62.196 -65.976)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12361"
            data-name="Path 12361"
            d="M65.594,108.859l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.235,169.007v-56.43A4.885,4.885,0,0,1,65.594,108.859Z"
            transform="translate(-62.194 -65.976)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12362"
            data-name="Path 12362"
            d="M65.595,108.857l72.731-41.992c1.3-.75,2.359-.3,2.359,1v56.43L63.236,169.009v-56.43A4.9,4.9,0,0,1,65.595,108.857Z"
            transform="translate(-62.191 -65.974)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12363"
            data-name="Path 12363"
            d="M65.6,108.86l72.731-41.992c1.3-.754,2.359-.307,2.359,1v56.43L63.237,169.008v-56.43A4.885,4.885,0,0,1,65.6,108.86Z"
            transform="translate(-62.188 -65.973)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12364"
            data-name="Path 12364"
            d="M65.6,108.858l72.731-41.992c1.3-.75,2.359-.3,2.359,1V124.3L63.238,169.01V112.58A4.9,4.9,0,0,1,65.6,108.858Z"
            transform="translate(-62.185 -65.971)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12365"
            data-name="Path 12365"
            d="M65.6,108.861l72.731-41.992c1.3-.753,2.359-.307,2.359,1v56.43L63.239,169.009v-56.43A4.885,4.885,0,0,1,65.6,108.861Z"
            transform="translate(-62.183 -65.97)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12366"
            data-name="Path 12366"
            d="M65.6,108.859,138.33,66.867c1.3-.75,2.359-.3,2.359,1v56.426L63.24,169.011v-56.43A4.892,4.892,0,0,1,65.6,108.859Z"
            transform="translate(-62.18 -65.968)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12367"
            data-name="Path 12367"
            d="M65.6,108.862l72.731-41.992c1.3-.753,2.359-.307,2.359,1V124.3L63.241,169.01V112.58A4.885,4.885,0,0,1,65.6,108.862Z"
            transform="translate(-62.177 -65.967)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12368"
            data-name="Path 12368"
            d="M65.6,108.86l72.735-41.992c1.3-.75,2.355-.307,2.355,1v56.43L63.242,169.009v-56.43A4.9,4.9,0,0,1,65.6,108.86Z"
            transform="translate(-62.174 -65.966)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g
          id="Group_1323"
          data-name="Group 1323"
          transform="translate(30.754 58.328)"
        >
          <path
            id="Path_12369"
            data-name="Path 12369"
            d="M140.691,82.579l46.729,26.983c1.28.735,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.294Z"
            transform="translate(-63.242 -79.501)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12370"
            data-name="Path 12370"
            d="M140.691,82.576l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.294Z"
            transform="translate(-63.242 -79.509)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12371"
            data-name="Path 12371"
            d="M140.691,82.574l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.289Z"
            transform="translate(-63.242 -79.515)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12372"
            data-name="Path 12372"
            d="M140.691,82.571l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,127.286Z"
            transform="translate(-63.242 -79.523)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12373"
            data-name="Path 12373"
            d="M140.691,82.568l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.286Z"
            transform="translate(-63.242 -79.531)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12374"
            data-name="Path 12374"
            d="M140.691,82.566l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.281Z"
            transform="translate(-63.242 -79.537)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12375"
            data-name="Path 12375"
            d="M140.691,82.563l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.278Z"
            transform="translate(-63.242 -79.545)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12376"
            data-name="Path 12376"
            d="M140.691,82.56l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.275Z"
            transform="translate(-63.242 -79.554)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12377"
            data-name="Path 12377"
            d="M140.691,82.558l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.273Z"
            transform="translate(-63.242 -79.559)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12378"
            data-name="Path 12378"
            d="M140.691,82.555l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.27Z"
            transform="translate(-63.242 -79.567)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12379"
            data-name="Path 12379"
            d="M140.691,82.552l46.729,26.983c1.28.735,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.267Z"
            transform="translate(-63.242 -79.576)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12380"
            data-name="Path 12380"
            d="M140.691,82.549l46.729,26.983c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.267Z"
            transform="translate(-63.242 -79.584)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12381"
            data-name="Path 12381"
            d="M140.691,82.547l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.262Z"
            transform="translate(-63.242 -79.59)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12382"
            data-name="Path 12382"
            d="M140.691,82.544l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,127.259Z"
            transform="translate(-63.242 -79.598)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12383"
            data-name="Path 12383"
            d="M140.691,82.541l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.259Z"
            transform="translate(-63.242 -79.606)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12384"
            data-name="Path 12384"
            d="M140.691,82.539l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.254Z"
            transform="translate(-63.242 -79.612)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12385"
            data-name="Path 12385"
            d="M140.691,82.536l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.251Z"
            transform="translate(-63.242 -79.62)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12386"
            data-name="Path 12386"
            d="M140.691,82.533l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.248Z"
            transform="translate(-63.242 -79.629)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12387"
            data-name="Path 12387"
            d="M140.691,82.531,187.42,109.51c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.246Z"
            transform="translate(-63.242 -79.634)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12388"
            data-name="Path 12388"
            d="M140.691,82.528l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.243Z"
            transform="translate(-63.242 -79.643)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12389"
            data-name="Path 12389"
            d="M140.691,82.525l46.729,26.983c1.28.735,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.24Z"
            transform="translate(-63.242 -79.651)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12390"
            data-name="Path 12390"
            d="M140.691,82.522,187.42,109.5c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.24Z"
            transform="translate(-63.242 -79.659)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12391"
            data-name="Path 12391"
            d="M140.691,82.52,187.42,109.5c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.235Z"
            transform="translate(-63.242 -79.665)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12392"
            data-name="Path 12392"
            d="M140.691,82.517,187.42,109.5c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,127.232Z"
            transform="translate(-63.242 -79.673)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12393"
            data-name="Path 12393"
            d="M140.691,82.514,187.42,109.5c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.232Z"
            transform="translate(-63.242 -79.682)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12394"
            data-name="Path 12394"
            d="M140.691,82.512l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.227Z"
            transform="translate(-63.242 -79.687)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12395"
            data-name="Path 12395"
            d="M140.691,82.509l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.224Z"
            transform="translate(-63.242 -79.696)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12396"
            data-name="Path 12396"
            d="M140.691,82.506l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.221Z"
            transform="translate(-63.242 -79.704)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12397"
            data-name="Path 12397"
            d="M140.691,82.5l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.219Z"
            transform="translate(-63.242 -79.71)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12398"
            data-name="Path 12398"
            d="M140.691,82.5,187.42,109.48c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.216Z"
            transform="translate(-63.242 -79.718)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12399"
            data-name="Path 12399"
            d="M140.691,82.5l46.729,26.983c1.28.735,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.213Z"
            transform="translate(-63.242 -79.726)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12400"
            data-name="Path 12400"
            d="M140.691,82.495l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.213Z"
            transform="translate(-63.242 -79.735)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12401"
            data-name="Path 12401"
            d="M140.691,82.493l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.208Z"
            transform="translate(-63.242 -79.74)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12402"
            data-name="Path 12402"
            d="M140.691,82.49l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.2Z"
            transform="translate(-63.242 -79.749)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12403"
            data-name="Path 12403"
            d="M140.691,82.487,187.42,109.47c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.205Z"
            transform="translate(-63.242 -79.757)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12404"
            data-name="Path 12404"
            d="M140.691,82.485l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.2Z"
            transform="translate(-63.242 -79.763)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12405"
            data-name="Path 12405"
            d="M140.691,82.482l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.2Z"
            transform="translate(-63.242 -79.771)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12406"
            data-name="Path 12406"
            d="M140.691,82.479l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.194Z"
            transform="translate(-63.242 -79.779)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12407"
            data-name="Path 12407"
            d="M140.691,82.477l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.192Z"
            transform="translate(-63.242 -79.785)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12408"
            data-name="Path 12408"
            d="M140.691,82.474l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.189Z"
            transform="translate(-63.242 -79.793)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12409"
            data-name="Path 12409"
            d="M140.691,82.471l46.729,26.983c1.28.735,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.186Z"
            transform="translate(-63.242 -79.802)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12410"
            data-name="Path 12410"
            d="M140.691,82.468l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.186Z"
            transform="translate(-63.242 -79.81)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12411"
            data-name="Path 12411"
            d="M140.691,82.466l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.181Z"
            transform="translate(-63.242 -79.815)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12412"
            data-name="Path 12412"
            d="M140.691,82.463l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,127.178Z"
            transform="translate(-63.242 -79.824)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12413"
            data-name="Path 12413"
            d="M140.691,82.46l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.178Z"
            transform="translate(-63.242 -79.832)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12414"
            data-name="Path 12414"
            d="M140.691,82.458l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.173Z"
            transform="translate(-63.242 -79.838)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12415"
            data-name="Path 12415"
            d="M140.691,82.455l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.17Z"
            transform="translate(-63.242 -79.846)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12416"
            data-name="Path 12416"
            d="M140.691,82.452l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.167Z"
            transform="translate(-63.242 -79.854)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12417"
            data-name="Path 12417"
            d="M140.691,82.45l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.165Z"
            transform="translate(-63.242 -79.86)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12418"
            data-name="Path 12418"
            d="M140.691,82.447l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.162Z"
            transform="translate(-63.242 -79.868)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12419"
            data-name="Path 12419"
            d="M140.691,82.444l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.159Z"
            transform="translate(-63.242 -79.877)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12420"
            data-name="Path 12420"
            d="M140.691,82.441l46.729,26.982c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.159Z"
            transform="translate(-63.242 -79.885)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12421"
            data-name="Path 12421"
            d="M140.691,82.439l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.154Z"
            transform="translate(-63.242 -79.891)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12422"
            data-name="Path 12422"
            d="M140.691,82.436l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.151Z"
            transform="translate(-63.242 -79.899)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12423"
            data-name="Path 12423"
            d="M140.691,82.433l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.151Z"
            transform="translate(-63.242 -79.907)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12424"
            data-name="Path 12424"
            d="M140.691,82.431,187.42,109.41c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.146Z"
            transform="translate(-63.242 -79.913)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12425"
            data-name="Path 12425"
            d="M140.691,82.428l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.143Z"
            transform="translate(-63.242 -79.921)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12426"
            data-name="Path 12426"
            d="M140.691,82.425l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.14Z"
            transform="translate(-63.242 -79.93)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12427"
            data-name="Path 12427"
            d="M140.691,82.423,187.42,109.4c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.138Z"
            transform="translate(-63.242 -79.935)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12428"
            data-name="Path 12428"
            d="M140.691,82.42,187.42,109.4c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.135Z"
            transform="translate(-63.242 -79.944)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12429"
            data-name="Path 12429"
            d="M140.691,82.417,187.42,109.4c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.132Z"
            transform="translate(-63.242 -79.952)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12430"
            data-name="Path 12430"
            d="M140.691,82.414,187.42,109.4c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.132Z"
            transform="translate(-63.242 -79.96)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12431"
            data-name="Path 12431"
            d="M140.691,82.412l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.127Z"
            transform="translate(-63.242 -79.966)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12432"
            data-name="Path 12432"
            d="M140.691,82.409l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.124Z"
            transform="translate(-63.242 -79.974)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12433"
            data-name="Path 12433"
            d="M140.691,82.406l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.124Z"
            transform="translate(-63.242 -79.983)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12434"
            data-name="Path 12434"
            d="M140.691,82.4l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.119Z"
            transform="translate(-63.242 -79.988)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12435"
            data-name="Path 12435"
            d="M140.691,82.4,187.42,109.38c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.116Z"
            transform="translate(-63.242 -79.997)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12436"
            data-name="Path 12436"
            d="M140.691,82.4l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.113Z"
            transform="translate(-63.242 -80.005)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12437"
            data-name="Path 12437"
            d="M140.691,82.4l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.111Z"
            transform="translate(-63.242 -80.011)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12438"
            data-name="Path 12438"
            d="M140.691,82.393l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.108Z"
            transform="translate(-63.242 -80.019)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12439"
            data-name="Path 12439"
            d="M140.691,82.39l46.729,26.982c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.1Z"
            transform="translate(-63.242 -80.027)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12440"
            data-name="Path 12440"
            d="M140.691,82.388l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.1Z"
            transform="translate(-63.242 -80.033)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12441"
            data-name="Path 12441"
            d="M140.691,82.385l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.1Z"
            transform="translate(-63.242 -80.041)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12442"
            data-name="Path 12442"
            d="M140.691,82.382l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.1Z"
            transform="translate(-63.242 -80.049)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12443"
            data-name="Path 12443"
            d="M140.691,82.379l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.1Z"
            transform="translate(-63.242 -80.058)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12444"
            data-name="Path 12444"
            d="M140.691,82.377l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.092Z"
            transform="translate(-63.242 -80.063)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12445"
            data-name="Path 12445"
            d="M140.691,82.374l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.182L63.242,127.089Z"
            transform="translate(-63.242 -80.072)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12446"
            data-name="Path 12446"
            d="M140.691,82.371l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.086Z"
            transform="translate(-63.242 -80.08)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12447"
            data-name="Path 12447"
            d="M140.691,82.369l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.084Z"
            transform="translate(-63.242 -80.086)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12448"
            data-name="Path 12448"
            d="M140.691,82.366l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.081Z"
            transform="translate(-63.242 -80.094)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12449"
            data-name="Path 12449"
            d="M140.691,82.363l46.729,26.982c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.078Z"
            transform="translate(-63.242 -80.102)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12450"
            data-name="Path 12450"
            d="M140.691,82.36l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.078Z"
            transform="translate(-63.242 -80.111)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12451"
            data-name="Path 12451"
            d="M140.691,82.358l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.073Z"
            transform="translate(-63.242 -80.116)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12452"
            data-name="Path 12452"
            d="M140.691,82.355l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.07Z"
            transform="translate(-63.242 -80.125)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12453"
            data-name="Path 12453"
            d="M140.691,82.352l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.07Z"
            transform="translate(-63.242 -80.133)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12454"
            data-name="Path 12454"
            d="M140.691,82.35l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.065Z"
            transform="translate(-63.242 -80.139)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12455"
            data-name="Path 12455"
            d="M140.691,82.347l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.062Z"
            transform="translate(-63.242 -80.147)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12456"
            data-name="Path 12456"
            d="M140.691,82.344l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.059Z"
            transform="translate(-63.242 -80.155)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12457"
            data-name="Path 12457"
            d="M140.691,82.342l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.057Z"
            transform="translate(-63.242 -80.161)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12458"
            data-name="Path 12458"
            d="M140.691,82.339l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.054Z"
            transform="translate(-63.242 -80.169)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12459"
            data-name="Path 12459"
            d="M140.691,82.336l46.729,26.983c1.28.735,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.051Z"
            transform="translate(-63.242 -80.178)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12460"
            data-name="Path 12460"
            d="M140.691,82.334l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.049Z"
            transform="translate(-63.242 -80.183)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12461"
            data-name="Path 12461"
            d="M140.691,82.331,187.42,109.31c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.046Z"
            transform="translate(-63.242 -80.192)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12462"
            data-name="Path 12462"
            d="M140.691,82.328l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.043Z"
            transform="translate(-63.242 -80.2)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12463"
            data-name="Path 12463"
            d="M140.691,82.325l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.043Z"
            transform="translate(-63.242 -80.208)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12464"
            data-name="Path 12464"
            d="M140.691,82.323,187.42,109.3c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.038Z"
            transform="translate(-63.242 -80.214)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12465"
            data-name="Path 12465"
            d="M140.691,82.32,187.42,109.3c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.035Z"
            transform="translate(-63.242 -80.222)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12466"
            data-name="Path 12466"
            d="M140.691,82.317,187.42,109.3c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.032Z"
            transform="translate(-63.242 -80.231)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12467"
            data-name="Path 12467"
            d="M140.691,82.315l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.03Z"
            transform="translate(-63.242 -80.236)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12468"
            data-name="Path 12468"
            d="M140.691,82.312l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.027Z"
            transform="translate(-63.242 -80.245)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12469"
            data-name="Path 12469"
            d="M140.691,82.309l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.024Z"
            transform="translate(-63.242 -80.253)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12470"
            data-name="Path 12470"
            d="M140.691,82.307l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.022Z"
            transform="translate(-63.242 -80.259)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12471"
            data-name="Path 12471"
            d="M140.691,82.3l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.019Z"
            transform="translate(-63.242 -80.267)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12472"
            data-name="Path 12472"
            d="M140.691,82.3,187.42,109.28c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.016Z"
            transform="translate(-63.242 -80.275)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12473"
            data-name="Path 12473"
            d="M140.691,82.3l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127.016Z"
            transform="translate(-63.242 -80.284)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12474"
            data-name="Path 12474"
            d="M140.691,82.3l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,127.011Z"
            transform="translate(-63.242 -80.289)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12475"
            data-name="Path 12475"
            d="M140.691,82.293l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127.008Z"
            transform="translate(-63.242 -80.298)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12476"
            data-name="Path 12476"
            d="M140.691,82.29l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127Z"
            transform="translate(-63.242 -80.306)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12477"
            data-name="Path 12477"
            d="M140.691,82.288l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127Z"
            transform="translate(-63.242 -80.311)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12478"
            data-name="Path 12478"
            d="M140.691,82.285l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,127Z"
            transform="translate(-63.242 -80.32)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12479"
            data-name="Path 12479"
            d="M140.691,82.282l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,127Z"
            transform="translate(-63.242 -80.328)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12480"
            data-name="Path 12480"
            d="M140.691,82.28l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.995Z"
            transform="translate(-63.242 -80.334)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12481"
            data-name="Path 12481"
            d="M140.691,82.277l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.992Z"
            transform="translate(-63.242 -80.342)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12482"
            data-name="Path 12482"
            d="M140.691,82.274l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.989Z"
            transform="translate(-63.242 -80.35)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12483"
            data-name="Path 12483"
            d="M140.691,82.271l46.729,26.982c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.989Z"
            transform="translate(-63.242 -80.359)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12484"
            data-name="Path 12484"
            d="M140.691,82.269l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.984Z"
            transform="translate(-63.242 -80.364)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12485"
            data-name="Path 12485"
            d="M140.691,82.266l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.981Z"
            transform="translate(-63.242 -80.373)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12486"
            data-name="Path 12486"
            d="M140.691,82.263l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.978Z"
            transform="translate(-63.242 -80.381)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12487"
            data-name="Path 12487"
            d="M140.691,82.261,187.42,109.24c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.976Z"
            transform="translate(-63.242 -80.387)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12488"
            data-name="Path 12488"
            d="M140.691,82.258l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.973Z"
            transform="translate(-63.242 -80.395)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12489"
            data-name="Path 12489"
            d="M140.691,82.255l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.97Z"
            transform="translate(-63.242 -80.403)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12490"
            data-name="Path 12490"
            d="M140.691,82.253l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.968Z"
            transform="translate(-63.242 -80.409)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12491"
            data-name="Path 12491"
            d="M140.691,82.25l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.965Z"
            transform="translate(-63.242 -80.417)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12492"
            data-name="Path 12492"
            d="M140.691,82.247l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.962Z"
            transform="translate(-63.242 -80.426)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12493"
            data-name="Path 12493"
            d="M140.691,82.244l46.729,26.983c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.959Z"
            transform="translate(-63.242 -80.434)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12494"
            data-name="Path 12494"
            d="M140.691,82.242l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.957Z"
            transform="translate(-63.242 -80.44)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12495"
            data-name="Path 12495"
            d="M140.691,82.239l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.954Z"
            transform="translate(-63.242 -80.448)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12496"
            data-name="Path 12496"
            d="M140.691,82.236l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.951Z"
            transform="translate(-63.242 -80.456)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12497"
            data-name="Path 12497"
            d="M140.691,82.234l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.949Z"
            transform="translate(-63.242 -80.462)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12498"
            data-name="Path 12498"
            d="M140.691,82.231,187.42,109.21c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.946Z"
            transform="translate(-63.242 -80.47)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12499"
            data-name="Path 12499"
            d="M140.691,82.228l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.943Z"
            transform="translate(-63.242 -80.479)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12500"
            data-name="Path 12500"
            d="M140.691,82.226,187.42,109.2c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.941Z"
            transform="translate(-63.242 -80.484)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12501"
            data-name="Path 12501"
            d="M140.691,82.223,187.42,109.2c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.938Z"
            transform="translate(-63.242 -80.493)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12502"
            data-name="Path 12502"
            d="M140.691,82.22,187.42,109.2c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.935Z"
            transform="translate(-63.242 -80.501)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12503"
            data-name="Path 12503"
            d="M140.691,82.217,187.42,109.2c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.932Z"
            transform="translate(-63.242 -80.509)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12504"
            data-name="Path 12504"
            d="M140.691,82.215l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.93Z"
            transform="translate(-63.242 -80.515)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12505"
            data-name="Path 12505"
            d="M140.691,82.212l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.927Z"
            transform="translate(-63.242 -80.523)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12506"
            data-name="Path 12506"
            d="M140.691,82.209l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.924Z"
            transform="translate(-63.242 -80.532)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12507"
            data-name="Path 12507"
            d="M140.691,82.207l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.922Z"
            transform="translate(-63.242 -80.537)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12508"
            data-name="Path 12508"
            d="M140.691,82.2l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.919Z"
            transform="translate(-63.242 -80.546)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12509"
            data-name="Path 12509"
            d="M140.691,82.2l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.916Z"
            transform="translate(-63.242 -80.554)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12510"
            data-name="Path 12510"
            d="M140.691,82.2l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.914Z"
            transform="translate(-63.242 -80.559)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12511"
            data-name="Path 12511"
            d="M140.691,82.2l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.911Z"
            transform="translate(-63.242 -80.568)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12512"
            data-name="Path 12512"
            d="M140.691,82.193l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.908Z"
            transform="translate(-63.242 -80.576)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12513"
            data-name="Path 12513"
            d="M140.691,82.19l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.9Z"
            transform="translate(-63.242 -80.585)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12514"
            data-name="Path 12514"
            d="M140.691,82.188l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.9Z"
            transform="translate(-63.242 -80.59)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12515"
            data-name="Path 12515"
            d="M140.691,82.185l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.9Z"
            transform="translate(-63.242 -80.598)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12516"
            data-name="Path 12516"
            d="M140.691,82.182l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.9Z"
            transform="translate(-63.242 -80.607)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12517"
            data-name="Path 12517"
            d="M140.691,82.18l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.895Z"
            transform="translate(-63.242 -80.612)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12518"
            data-name="Path 12518"
            d="M140.691,82.177l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.892Z"
            transform="translate(-63.242 -80.621)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12519"
            data-name="Path 12519"
            d="M140.691,82.174l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.889Z"
            transform="translate(-63.242 -80.629)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12520"
            data-name="Path 12520"
            d="M140.691,82.172l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.887Z"
            transform="translate(-63.242 -80.635)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12521"
            data-name="Path 12521"
            d="M140.691,82.169l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.884Z"
            transform="translate(-63.242 -80.643)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12522"
            data-name="Path 12522"
            d="M140.691,82.166l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.881Z"
            transform="translate(-63.242 -80.651)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12523"
            data-name="Path 12523"
            d="M140.691,82.163l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.878Z"
            transform="translate(-63.242 -80.66)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12524"
            data-name="Path 12524"
            d="M140.691,82.161,187.42,109.14c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.876Z"
            transform="translate(-63.242 -80.665)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12525"
            data-name="Path 12525"
            d="M140.691,82.158l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.873Z"
            transform="translate(-63.242 -80.674)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12526"
            data-name="Path 12526"
            d="M140.691,82.155l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.87Z"
            transform="translate(-63.242 -80.682)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12527"
            data-name="Path 12527"
            d="M140.691,82.153l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.868Z"
            transform="translate(-63.242 -80.688)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12528"
            data-name="Path 12528"
            d="M140.691,82.15l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.865Z"
            transform="translate(-63.242 -80.696)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12529"
            data-name="Path 12529"
            d="M140.691,82.147,187.42,109.13c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.862Z"
            transform="translate(-63.242 -80.704)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12530"
            data-name="Path 12530"
            d="M140.691,82.145l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.86Z"
            transform="translate(-63.242 -80.71)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12531"
            data-name="Path 12531"
            d="M140.691,82.142l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.857Z"
            transform="translate(-63.242 -80.718)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12532"
            data-name="Path 12532"
            d="M140.691,82.139l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.854Z"
            transform="translate(-63.242 -80.727)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12533"
            data-name="Path 12533"
            d="M140.691,82.136l46.729,26.983c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.851Z"
            transform="translate(-63.242 -80.735)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12534"
            data-name="Path 12534"
            d="M140.691,82.134l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.849Z"
            transform="translate(-63.242 -80.741)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12535"
            data-name="Path 12535"
            d="M140.691,82.131,187.42,109.11c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.846Z"
            transform="translate(-63.242 -80.749)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12536"
            data-name="Path 12536"
            d="M140.691,82.128l46.729,26.983c1.28.738,1.42,1.852.311,2.492L114.291,154a4.8,4.8,0,0,1-4.32-.178L63.242,126.843Z"
            transform="translate(-63.242 -80.757)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12537"
            data-name="Path 12537"
            d="M140.691,82.126,187.42,109.1c1.28.738,1.42,1.855.311,2.492L114.291,154a4.8,4.8,0,0,1-4.32-.178L63.242,126.841Z"
            transform="translate(-63.242 -80.763)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12538"
            data-name="Path 12538"
            d="M140.691,82.123,187.42,109.1c1.28.738,1.42,1.855.311,2.5L114.291,154a4.812,4.812,0,0,1-4.32-.182L63.242,126.838Z"
            transform="translate(-63.242 -80.771)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12539"
            data-name="Path 12539"
            d="M140.691,82.12,187.42,109.1c1.28.738,1.42,1.852.311,2.492L114.291,154a4.8,4.8,0,0,1-4.32-.178L63.242,126.835Z"
            transform="translate(-63.242 -80.78)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12540"
            data-name="Path 12540"
            d="M140.691,82.118,187.42,109.1c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.833Z"
            transform="translate(-63.242 -80.785)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12541"
            data-name="Path 12541"
            d="M140.691,82.115l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.83Z"
            transform="translate(-63.242 -80.794)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12542"
            data-name="Path 12542"
            d="M140.691,82.112l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.827Z"
            transform="translate(-63.242 -80.802)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12543"
            data-name="Path 12543"
            d="M140.691,82.109l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.824Z"
            transform="translate(-63.242 -80.81)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12544"
            data-name="Path 12544"
            d="M140.691,82.107l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.822Z"
            transform="translate(-63.242 -80.816)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12545"
            data-name="Path 12545"
            d="M140.691,82.1l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.819Z"
            transform="translate(-63.242 -80.824)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12546"
            data-name="Path 12546"
            d="M140.691,82.1l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.816Z"
            transform="translate(-63.242 -80.833)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12547"
            data-name="Path 12547"
            d="M140.691,82.1l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.814Z"
            transform="translate(-63.242 -80.838)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12548"
            data-name="Path 12548"
            d="M140.691,82.1l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.811Z"
            transform="translate(-63.242 -80.846)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12549"
            data-name="Path 12549"
            d="M140.691,82.093l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.808Z"
            transform="translate(-63.242 -80.855)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12550"
            data-name="Path 12550"
            d="M140.691,82.091,187.42,109.07c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.806Z"
            transform="translate(-63.242 -80.86)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12551"
            data-name="Path 12551"
            d="M140.691,82.088l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.8Z"
            transform="translate(-63.242 -80.869)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12552"
            data-name="Path 12552"
            d="M140.691,82.085l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.8Z"
            transform="translate(-63.242 -80.877)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12553"
            data-name="Path 12553"
            d="M140.691,82.082l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.8Z"
            transform="translate(-63.242 -80.885)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12554"
            data-name="Path 12554"
            d="M140.691,82.08l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.795Z"
            transform="translate(-63.242 -80.891)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12555"
            data-name="Path 12555"
            d="M140.691,82.077l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.792Z"
            transform="translate(-63.242 -80.899)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12556"
            data-name="Path 12556"
            d="M140.691,82.074l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.789Z"
            transform="translate(-63.242 -80.908)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12557"
            data-name="Path 12557"
            d="M140.691,82.072l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.787Z"
            transform="translate(-63.242 -80.913)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12558"
            data-name="Path 12558"
            d="M140.691,82.069l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.784Z"
            transform="translate(-63.242 -80.922)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12559"
            data-name="Path 12559"
            d="M140.691,82.066l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.781Z"
            transform="translate(-63.242 -80.93)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12560"
            data-name="Path 12560"
            d="M140.691,82.064l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.779Z"
            transform="translate(-63.242 -80.936)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12561"
            data-name="Path 12561"
            d="M140.691,82.061,187.42,109.04c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.776Z"
            transform="translate(-63.242 -80.944)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12562"
            data-name="Path 12562"
            d="M140.691,82.058l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.773Z"
            transform="translate(-63.242 -80.952)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12563"
            data-name="Path 12563"
            d="M140.691,82.055l46.729,26.982c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.77Z"
            transform="translate(-63.242 -80.961)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12564"
            data-name="Path 12564"
            d="M140.691,82.053l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.768Z"
            transform="translate(-63.242 -80.966)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12565"
            data-name="Path 12565"
            d="M140.691,82.05l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.765Z"
            transform="translate(-63.242 -80.975)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12566"
            data-name="Path 12566"
            d="M140.691,82.047,187.42,109.03c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.762Z"
            transform="translate(-63.242 -80.983)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12567"
            data-name="Path 12567"
            d="M140.691,82.045l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.76Z"
            transform="translate(-63.242 -80.989)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12568"
            data-name="Path 12568"
            d="M140.691,82.042l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.757Z"
            transform="translate(-63.242 -80.997)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12569"
            data-name="Path 12569"
            d="M140.691,82.039l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.754Z"
            transform="translate(-63.242 -81.005)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12570"
            data-name="Path 12570"
            d="M140.691,82.037l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.752Z"
            transform="translate(-63.242 -81.011)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12571"
            data-name="Path 12571"
            d="M140.691,82.034l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.749Z"
            transform="translate(-63.242 -81.019)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12572"
            data-name="Path 12572"
            d="M140.691,82.031,187.42,109.01c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.746Z"
            transform="translate(-63.242 -81.028)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12573"
            data-name="Path 12573"
            d="M140.691,82.028,187.42,109.01c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.743Z"
            transform="translate(-63.242 -81.036)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12574"
            data-name="Path 12574"
            d="M140.691,82.026,187.42,109c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.741Z"
            transform="translate(-63.242 -81.042)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12575"
            data-name="Path 12575"
            d="M140.691,82.023,187.42,109c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.738Z"
            transform="translate(-63.242 -81.05)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12576"
            data-name="Path 12576"
            d="M140.691,82.02,187.42,109c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.735Z"
            transform="translate(-63.242 -81.058)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12577"
            data-name="Path 12577"
            d="M140.691,82.018,187.42,109c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.733Z"
            transform="translate(-63.242 -81.064)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12578"
            data-name="Path 12578"
            d="M140.691,82.015l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.73Z"
            transform="translate(-63.242 -81.072)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12579"
            data-name="Path 12579"
            d="M140.691,82.012l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.727Z"
            transform="translate(-63.242 -81.081)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12580"
            data-name="Path 12580"
            d="M140.691,82.01l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.725Z"
            transform="translate(-63.242 -81.086)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12581"
            data-name="Path 12581"
            d="M140.691,82.007l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.722Z"
            transform="translate(-63.242 -81.094)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12582"
            data-name="Path 12582"
            d="M140.691,82l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.719Z"
            transform="translate(-63.242 -81.103)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12583"
            data-name="Path 12583"
            d="M140.691,82l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.716Z"
            transform="translate(-63.242 -81.111)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12584"
            data-name="Path 12584"
            d="M140.691,82l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.714Z"
            transform="translate(-63.242 -81.117)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12585"
            data-name="Path 12585"
            d="M140.691,82l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.711Z"
            transform="translate(-63.242 -81.125)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12586"
            data-name="Path 12586"
            d="M140.691,81.993l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.708Z"
            transform="translate(-63.242 -81.133)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12587"
            data-name="Path 12587"
            d="M140.691,81.991,187.42,108.97c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.706Z"
            transform="translate(-63.242 -81.139)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12588"
            data-name="Path 12588"
            d="M140.691,81.988l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.7Z"
            transform="translate(-63.242 -81.147)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12589"
            data-name="Path 12589"
            d="M140.691,81.985l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.7Z"
            transform="translate(-63.242 -81.156)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12590"
            data-name="Path 12590"
            d="M140.691,81.983l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.7Z"
            transform="translate(-63.242 -81.161)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12591"
            data-name="Path 12591"
            d="M140.691,81.98l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.695Z"
            transform="translate(-63.242 -81.17)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12592"
            data-name="Path 12592"
            d="M140.691,81.977l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.692Z"
            transform="translate(-63.242 -81.178)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12593"
            data-name="Path 12593"
            d="M140.691,81.974l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.689Z"
            transform="translate(-63.242 -81.186)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12594"
            data-name="Path 12594"
            d="M140.691,81.972l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.687Z"
            transform="translate(-63.242 -81.192)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12595"
            data-name="Path 12595"
            d="M140.691,81.969l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.684Z"
            transform="translate(-63.242 -81.2)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12596"
            data-name="Path 12596"
            d="M140.691,81.966l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.681Z"
            transform="translate(-63.242 -81.209)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12597"
            data-name="Path 12597"
            d="M140.691,81.964l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.679Z"
            transform="translate(-63.242 -81.214)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12598"
            data-name="Path 12598"
            d="M140.691,81.961,187.42,108.94c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.676Z"
            transform="translate(-63.242 -81.223)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12599"
            data-name="Path 12599"
            d="M140.691,81.958l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.673Z"
            transform="translate(-63.242 -81.231)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12600"
            data-name="Path 12600"
            d="M140.691,81.956l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.671Z"
            transform="translate(-63.242 -81.237)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12601"
            data-name="Path 12601"
            d="M140.691,81.953l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.668Z"
            transform="translate(-63.242 -81.245)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12602"
            data-name="Path 12602"
            d="M140.691,81.95l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.665Z"
            transform="translate(-63.242 -81.253)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12603"
            data-name="Path 12603"
            d="M140.691,81.947,187.42,108.93c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.662Z"
            transform="translate(-63.242 -81.262)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12604"
            data-name="Path 12604"
            d="M140.691,81.945l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.66Z"
            transform="translate(-63.242 -81.267)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12605"
            data-name="Path 12605"
            d="M140.691,81.942l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.824,4.824,0,0,1-4.32-.178L63.242,126.657Z"
            transform="translate(-63.242 -81.276)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12606"
            data-name="Path 12606"
            d="M140.691,81.939l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.654Z"
            transform="translate(-63.242 -81.284)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12607"
            data-name="Path 12607"
            d="M140.691,81.937l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.652Z"
            transform="translate(-63.242 -81.29)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12608"
            data-name="Path 12608"
            d="M140.691,81.934l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.649Z"
            transform="translate(-63.242 -81.298)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12609"
            data-name="Path 12609"
            d="M140.691,81.931l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.646Z"
            transform="translate(-63.242 -81.306)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12610"
            data-name="Path 12610"
            d="M140.691,81.928l46.729,26.982c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.646Z"
            transform="translate(-63.242 -81.315)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12611"
            data-name="Path 12611"
            d="M140.691,81.926,187.42,108.9c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.641Z"
            transform="translate(-63.242 -81.32)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12612"
            data-name="Path 12612"
            d="M140.691,81.923,187.42,108.9c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.638Z"
            transform="translate(-63.242 -81.329)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12613"
            data-name="Path 12613"
            d="M140.691,81.92,187.42,108.9c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.635Z"
            transform="translate(-63.242 -81.337)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12614"
            data-name="Path 12614"
            d="M140.691,81.918,187.42,108.9c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.633Z"
            transform="translate(-63.242 -81.342)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12615"
            data-name="Path 12615"
            d="M140.691,81.915l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.63Z"
            transform="translate(-63.242 -81.351)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12616"
            data-name="Path 12616"
            d="M140.691,81.912l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.627Z"
            transform="translate(-63.242 -81.359)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12617"
            data-name="Path 12617"
            d="M140.691,81.91l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.625Z"
            transform="translate(-63.242 -81.365)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12618"
            data-name="Path 12618"
            d="M140.691,81.907l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.622Z"
            transform="translate(-63.242 -81.373)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12619"
            data-name="Path 12619"
            d="M140.691,81.9l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.619Z"
            transform="translate(-63.242 -81.381)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12620"
            data-name="Path 12620"
            d="M140.691,81.9l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.619Z"
            transform="translate(-63.242 -81.39)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12621"
            data-name="Path 12621"
            d="M140.691,81.9l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.614Z"
            transform="translate(-63.242 -81.395)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12622"
            data-name="Path 12622"
            d="M140.691,81.9l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.611Z"
            transform="translate(-63.242 -81.404)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12623"
            data-name="Path 12623"
            d="M140.691,81.893l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.608Z"
            transform="translate(-63.242 -81.412)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12624"
            data-name="Path 12624"
            d="M140.691,81.891,187.42,108.87c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.606Z"
            transform="translate(-63.242 -81.418)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12625"
            data-name="Path 12625"
            d="M140.691,81.888l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.6Z"
            transform="translate(-63.242 -81.426)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12626"
            data-name="Path 12626"
            d="M140.691,81.885l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.6Z"
            transform="translate(-63.242 -81.434)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12627"
            data-name="Path 12627"
            d="M140.691,81.883l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.6Z"
            transform="translate(-63.242 -81.44)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12628"
            data-name="Path 12628"
            d="M140.691,81.88l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.595Z"
            transform="translate(-63.242 -81.448)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12629"
            data-name="Path 12629"
            d="M140.691,81.877l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.592Z"
            transform="translate(-63.242 -81.457)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12630"
            data-name="Path 12630"
            d="M140.691,81.874l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.592Z"
            transform="translate(-63.242 -81.465)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12631"
            data-name="Path 12631"
            d="M140.691,81.872l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.587Z"
            transform="translate(-63.242 -81.471)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12632"
            data-name="Path 12632"
            d="M140.691,81.869l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.584Z"
            transform="translate(-63.242 -81.479)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12633"
            data-name="Path 12633"
            d="M140.691,81.866l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.581Z"
            transform="translate(-63.242 -81.487)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12634"
            data-name="Path 12634"
            d="M140.691,81.864l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.579Z"
            transform="translate(-63.242 -81.493)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12635"
            data-name="Path 12635"
            d="M140.691,81.861,187.42,108.84c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.576Z"
            transform="translate(-63.242 -81.501)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12636"
            data-name="Path 12636"
            d="M140.691,81.858l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.573Z"
            transform="translate(-63.242 -81.51)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12637"
            data-name="Path 12637"
            d="M140.691,81.856l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.571Z"
            transform="translate(-63.242 -81.515)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12638"
            data-name="Path 12638"
            d="M140.691,81.853l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.568Z"
            transform="translate(-63.242 -81.524)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12639"
            data-name="Path 12639"
            d="M140.691,81.85l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.565Z"
            transform="translate(-63.242 -81.532)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12640"
            data-name="Path 12640"
            d="M140.691,81.847,187.42,108.83c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.565Z"
            transform="translate(-63.242 -81.54)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12641"
            data-name="Path 12641"
            d="M140.691,81.845l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.56Z"
            transform="translate(-63.242 -81.546)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12642"
            data-name="Path 12642"
            d="M140.691,81.842l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.557Z"
            transform="translate(-63.242 -81.554)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12643"
            data-name="Path 12643"
            d="M140.691,81.839l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.554Z"
            transform="translate(-63.242 -81.563)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12644"
            data-name="Path 12644"
            d="M140.691,81.837l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.552Z"
            transform="translate(-63.242 -81.568)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12645"
            data-name="Path 12645"
            d="M140.691,81.834l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.549Z"
            transform="translate(-63.242 -81.577)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12646"
            data-name="Path 12646"
            d="M140.691,81.831l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.546Z"
            transform="translate(-63.242 -81.585)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12647"
            data-name="Path 12647"
            d="M140.691,81.829l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.544Z"
            transform="translate(-63.242 -81.59)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12648"
            data-name="Path 12648"
            d="M140.691,81.826,187.42,108.8c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.541Z"
            transform="translate(-63.242 -81.599)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12649"
            data-name="Path 12649"
            d="M140.691,81.823l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.538Z"
            transform="translate(-63.242 -81.607)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12650"
            data-name="Path 12650"
            d="M140.691,81.82,187.42,108.8c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.538Z"
            transform="translate(-63.242 -81.616)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12651"
            data-name="Path 12651"
            d="M140.691,81.818,187.42,108.8c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.182L63.242,126.533Z"
            transform="translate(-63.242 -81.621)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12652"
            data-name="Path 12652"
            d="M140.691,81.815,187.42,108.8c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.811,4.811,0,0,1-4.32-.178L63.242,126.53Z"
            transform="translate(-63.242 -81.629)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12653"
            data-name="Path 12653"
            d="M140.691,81.812l46.729,26.983c1.28.738,1.42,1.852.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.527Z"
            transform="translate(-63.242 -81.638)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12654"
            data-name="Path 12654"
            d="M140.691,81.81l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.525Z"
            transform="translate(-63.242 -81.643)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12655"
            data-name="Path 12655"
            d="M140.691,81.807l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.522Z"
            transform="translate(-63.242 -81.652)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12656"
            data-name="Path 12656"
            d="M140.691,81.8l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.519Z"
            transform="translate(-63.242 -81.66)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12657"
            data-name="Path 12657"
            d="M140.691,81.8l46.729,26.979c1.28.738,1.42,1.855.311,2.491l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.517Z"
            transform="translate(-63.242 -81.666)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12658"
            data-name="Path 12658"
            d="M140.691,81.8l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.514Z"
            transform="translate(-63.242 -81.674)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12659"
            data-name="Path 12659"
            d="M140.691,81.8l46.729,26.983c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.511Z"
            transform="translate(-63.242 -81.682)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12660"
            data-name="Path 12660"
            d="M140.691,81.793l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.511Z"
            transform="translate(-63.242 -81.691)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12661"
            data-name="Path 12661"
            d="M140.691,81.791,187.42,108.77c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.506Z"
            transform="translate(-63.242 -81.696)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12662"
            data-name="Path 12662"
            d="M140.691,81.788l46.729,26.983c1.28.735,1.42,1.852.311,2.492l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.5Z"
            transform="translate(-63.242 -81.705)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12663"
            data-name="Path 12663"
            d="M140.691,81.785l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.5Z"
            transform="translate(-63.242 -81.713)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12664"
            data-name="Path 12664"
            d="M140.691,81.783l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.5Z"
            transform="translate(-63.242 -81.719)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12665"
            data-name="Path 12665"
            d="M140.691,81.78l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.812,4.812,0,0,1-4.32-.178L63.242,126.495Z"
            transform="translate(-63.242 -81.727)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12666"
            data-name="Path 12666"
            d="M140.691,81.777,187.42,108.76c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.492Z"
            transform="translate(-63.242 -81.735)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12667"
            data-name="Path 12667"
            d="M140.691,81.775l46.729,26.979c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.49Z"
            transform="translate(-63.242 -81.741)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12668"
            data-name="Path 12668"
            d="M140.691,81.772l46.729,26.979c1.28.738,1.42,1.855.311,2.5l-73.439,42.4a4.813,4.813,0,0,1-4.32-.182L63.242,126.487Z"
            transform="translate(-63.242 -81.749)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12669"
            data-name="Path 12669"
            d="M140.691,81.769l46.729,26.982c1.28.738,1.42,1.852.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.484Z"
            transform="translate(-63.242 -81.758)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_12670"
            data-name="Path 12670"
            d="M140.691,81.766l46.729,26.983c1.28.738,1.42,1.855.311,2.492l-73.439,42.4a4.8,4.8,0,0,1-4.32-.178L63.242,126.484Z"
            transform="translate(-63.242 -81.766)"
            fill="url(#linear-gradient)"
          />
        </g>
        <path
          id="Path_12671"
          data-name="Path 12671"
          d="M72.181,98.946l-3.658-2.109v.678l3.658,2.113Zm-8.728-4.7a.642.642,0,0,0,.288.507c.159.091.288.015.288-.174a.641.641,0,0,0-.288-.5C63.582,93.982,63.453,94.061,63.453,94.247Zm4.638,2.34-3.658-2.113v.447l.151.322,3.374,1.946.133-.155Z"
          transform="translate(-31.9 10.754)"
          fill="gray"
        />
        <g
          id="Group_1335"
          data-name="Group 1335"
          transform="translate(30.754 0.538)"
        >
          <path
            id="Path_12672"
            data-name="Path 12672"
            d="M63.242,169.009l77.445-44.715V67.864c0-1.3-1.053-1.746-2.355-1L65.6,108.86a4.9,4.9,0,0,0-2.355,3.718Z"
            transform="translate(-63.242 -66.504)"
            fill="#13263d"
          />
          <g
            id="Group_1324"
            data-name="Group 1324"
            transform="translate(38.054 22.037)"
          >
            <path
              id="Path_12673"
              data-name="Path 12673"
              d="M73.8,73.677h0a1.059,1.059,0,0,0,.507-.807v-.178c0-.28-.227-.379-.507-.216h0a1.053,1.053,0,0,0-.511.8v.182C73.292,73.742,73.519,73.84,73.8,73.677Z"
              transform="translate(-73.292 -72.116)"
            />
            <path
              id="Path_12674"
              data-name="Path 12674"
              d="M73.591,73.054h0a.463.463,0,0,0,.22-.348V72.63c0-.125-.1-.167-.22-.095h0a.457.457,0,0,0-.223.348v.076C73.368,73.08,73.466,73.122,73.591,73.054Z"
              transform="translate(-73.08 -71.833)"
              fill="#666"
            />
            <path
              id="Path_12675"
              data-name="Path 12675"
              d="M73.9,72.878h0a.463.463,0,0,0,.22-.348v-.076c0-.125-.1-.167-.22-.095h0a.451.451,0,0,0-.223.348v.076C73.673,72.9,73.771,72.946,73.9,72.878Z"
              transform="translate(-72.23 -72.324)"
              fill="#00b16a"
            />
          </g>
          <path
            id="Path_12676"
            data-name="Path 12676"
            d="M64.019,162.138,135.7,120.752v-53.3L64.019,108.835Z"
            transform="translate(-61.076 -63.87)"
            fill="#ce1b33"
          />
          <g
            id="Group_1334"
            data-name="Group 1334"
            transform="translate(10.08 13.825)"
          >
            <path
              id="Path_12677"
              data-name="Path 12677"
              d="M67.335,102.658l55.972-32.314c.791-.454,1.435-.064,1.435.871v38.1a3.206,3.206,0,0,1-1.435,2.526L67.335,144.162c-.788.454-1.431.064-1.431-.871V105.184A3.224,3.224,0,0,1,67.335,102.658Z"
              transform="translate(-65.904 -70.155)"
              fill="#0e233e"
              style={{ mixBlendMode: "screen", isolation: "isolate" }}
            />
            <g
              id="Group_1333"
              data-name="Group 1333"
              transform="translate(5.229 6.174)"
              opacity="0.47"
              style={{ isolation: "isolate" }}
            >
              <animated.path
                id="Path_12678"
                data-name="Path 12678"
                d="M115.423,93.435,67.285,121.227V100.7L115.423,72.91Z"
                transform="translate(-67.284 -68.653)"
                fill={fill}
                style={{ mixBlendMode: "overlay", isolation: "isolate" }}
              />
              <g
                id="Group_1326"
                data-name="Group 1326"
                transform="translate(0.001 47.058)"
              >
                <animated.path
                  id="Path_12679"
                  data-name="Path 12679"
                  d="M73.385,92.3l-6.1,3.521V88.648l6.1-3.522Z"
                  transform="translate(-67.285 -81.669)"
                  fill={fill}
                  style={{ mixBlendMode: "overlay", isolation: "isolate" }}
                />
                <g
                  id="Group_1325"
                  data-name="Group 1325"
                  transform="translate(7.249)"
                >
                  <path
                    id="Path_12680"
                    data-name="Path 12680"
                    d="M73.5,84.731l-4.3,2.485V86.84l4.3-2.485Z"
                    transform="translate(-69.2 -83.818)"
                    fill="#fff"
                    style={{ mixBlendMode: "overlay", isolation: "isolate" }}
                  />
                  <path
                    id="Path_12681"
                    data-name="Path 12681"
                    d="M75.966,84.589,69.2,88.5V88.12l6.766-3.907Z"
                    transform="translate(-69.2 -84.213)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12682"
                    data-name="Path 12682"
                    d="M75.966,84.792,69.2,88.7v-.376l6.766-3.907Z"
                    transform="translate(-69.2 -83.65)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12683"
                    data-name="Path 12683"
                    d="M75.966,84.994,69.2,88.9v-.376l6.766-3.907Z"
                    transform="translate(-69.2 -83.086)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12684"
                    data-name="Path 12684"
                    d="M75.966,85.2,69.2,89.1v-.376l6.766-3.906Z"
                    transform="translate(-69.2 -82.523)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12685"
                    data-name="Path 12685"
                    d="M75.966,85.4,69.2,89.3v-.376l6.766-3.906Z"
                    transform="translate(-69.2 -81.959)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12686"
                    data-name="Path 12686"
                    d="M75.966,85.6,69.2,89.507v-.376l6.766-3.907Z"
                    transform="translate(-69.2 -81.396)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12687"
                    data-name="Path 12687"
                    d="M75.966,85.8,69.2,89.709v-.376l6.766-3.906Z"
                    transform="translate(-69.2 -80.832)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12688"
                    data-name="Path 12688"
                    d="M74.8,86.183l-5.6,3.234v-.376l5.6-3.234Z"
                    transform="translate(-69.2 -79.774)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Group_1328"
                data-name="Group 1328"
                transform="translate(16.838 37.337)"
              >
                <animated.path
                  id="Path_12689"
                  data-name="Path 12689"
                  d="M77.832,89.735l-6.1,3.522V86.081l6.1-3.522Z"
                  transform="translate(-71.732 -79.101)"
                  fill={fill}
                  style={{ mixBlendMode: "overlay", isolation: "isolate" }}
                />
                <g
                  id="Group_1327"
                  data-name="Group 1327"
                  transform="translate(7.249)"
                >
                  <path
                    id="Path_12690"
                    data-name="Path 12690"
                    d="M77.951,82.164l-4.3,2.485v-.376l4.3-2.485Z"
                    transform="translate(-73.646 -81.25)"
                    fill="#fff"
                    style={{ mixBlendMode: "overlay", isolation: "isolate" }}
                  />
                  <path
                    id="Path_12691"
                    data-name="Path 12691"
                    d="M80.413,82.022l-6.766,3.907v-.376l6.766-3.906Z"
                    transform="translate(-73.646 -81.646)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12692"
                    data-name="Path 12692"
                    d="M80.413,82.224,73.646,86.13v-.376l6.766-3.907Z"
                    transform="translate(-73.646 -81.083)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12693"
                    data-name="Path 12693"
                    d="M80.413,82.426l-6.766,3.907v-.376l6.766-3.906Z"
                    transform="translate(-73.646 -80.519)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12694"
                    data-name="Path 12694"
                    d="M80.413,82.628l-6.766,3.907v-.376l6.766-3.907Z"
                    transform="translate(-73.646 -79.956)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12695"
                    data-name="Path 12695"
                    d="M80.413,82.831l-6.766,3.907v-.376l6.766-3.907Z"
                    transform="translate(-73.646 -79.392)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12696"
                    data-name="Path 12696"
                    d="M80.413,83.033l-6.766,3.907v-.376l6.766-3.906Z"
                    transform="translate(-73.646 -78.828)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12697"
                    data-name="Path 12697"
                    d="M80.413,83.236l-6.766,3.907v-.376l6.766-3.907Z"
                    transform="translate(-73.646 -78.265)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12698"
                    data-name="Path 12698"
                    d="M79.248,83.615l-5.6,3.234v-.376l5.6-3.234Z"
                    transform="translate(-73.646 -77.207)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Group_1330"
                data-name="Group 1330"
                transform="translate(33.676 27.616)"
              >
                <animated.path
                  id="Path_12699"
                  data-name="Path 12699"
                  d="M82.278,87.168l-6.1,3.522V83.514l6.1-3.522Z"
                  transform="translate(-76.179 -76.534)"
                  fill={fill}
                  style={{ mixBlendMode: "overlay", isolation: "isolate" }}
                />
                <g
                  id="Group_1329"
                  data-name="Group 1329"
                  transform="translate(7.249)"
                >
                  <path
                    id="Path_12700"
                    data-name="Path 12700"
                    d="M82.4,79.6l-4.3,2.485v-.376l4.3-2.485Z"
                    transform="translate(-78.093 -78.683)"
                    fill="#fff"
                    style={{ mixBlendMode: "overlay", isolation: "isolate" }}
                  />
                  <path
                    id="Path_12701"
                    data-name="Path 12701"
                    d="M84.859,79.455l-6.766,3.907v-.376l6.766-3.907Z"
                    transform="translate(-78.093 -79.079)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12702"
                    data-name="Path 12702"
                    d="M84.859,79.657l-6.766,3.907v-.376l6.766-3.907Z"
                    transform="translate(-78.093 -78.515)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12703"
                    data-name="Path 12703"
                    d="M84.859,79.859l-6.766,3.907V83.39l6.766-3.907Z"
                    transform="translate(-78.093 -77.952)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12704"
                    data-name="Path 12704"
                    d="M84.859,80.061l-6.766,3.907v-.376l6.766-3.907Z"
                    transform="translate(-78.093 -77.388)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12705"
                    data-name="Path 12705"
                    d="M84.859,80.264,78.093,84.17v-.376l6.766-3.907Z"
                    transform="translate(-78.093 -76.824)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12706"
                    data-name="Path 12706"
                    d="M84.859,80.466l-6.766,3.907V84l6.766-3.907Z"
                    transform="translate(-78.093 -76.261)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12707"
                    data-name="Path 12707"
                    d="M84.859,80.668l-6.766,3.906V84.2l6.766-3.907Z"
                    transform="translate(-78.093 -75.697)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12708"
                    data-name="Path 12708"
                    d="M83.695,81.048l-5.6,3.234v-.376l5.6-3.234Z"
                    transform="translate(-78.093 -74.639)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Group_1332"
                data-name="Group 1332"
                transform="translate(45.885)"
              >
                <path
                  id="Path_12709"
                  data-name="Path 12709"
                  d="M81.929,72.711a2.82,2.82,0,0,1-1.261,2.215c-.7.4-1.265.064-1.265-.757a2.824,2.824,0,0,1,1.265-2.215C81.364,71.553,81.929,71.893,81.929,72.711Z"
                  transform="translate(-79.403 -71.785)"
                  fill="#fff"
                />
                <g
                  id="Group_1331"
                  data-name="Group 1331"
                  transform="translate(0.724 0.746)"
                >
                  <animated.path
                    id="Path_12710"
                    data-name="Path 12710"
                    d="M80.675,72.2l-1.081.624v-.217l1.081-.624Z"
                    transform="translate(-79.594 -71.982)"
                    fill={fill}
                  />
                  <path
                    id="Path_12711"
                    data-name="Path 12711"
                    d="M80.675,72.329l-1.081.624v-.217l1.081-.624Z"
                    transform="translate(-79.594 -71.623)"
                    fill="#fff"
                  />
                  <path
                    id="Path_12712"
                    data-name="Path 12712"
                    d="M80.675,72.458l-1.081.624v-.217l1.081-.624Z"
                    transform="translate(-79.594 -71.264)"
                    fill="#fff"
                  />
                </g>
              </g>
              <animated.path
                id="Path_12713"
                data-name="Path 12713"
                d="M74.282,78.011l-5.415,3.124a3.283,3.283,0,0,0-1.583,2.5V83.9c0,.875.708,1.174,1.583.67l5.415-3.128a3.282,3.282,0,0,0,1.579-2.5v-.269C75.861,77.807,75.153,77.507,74.282,78.011Z"
                transform="translate(-67.285 -55.12)"
                fill={fill}
                style={{ mixBlendMode: "overlay", isolation: "isolate" }}
              />
            </g>
          </g>
        </g>
        <g
          id="Group_1337"
          data-name="Group 1337"
          transform="translate(30.752 58.328)"
        >
          <path
            id="Path_12714"
            data-name="Path 12714"
            d="M140.687,81.766,63.242,126.484l46.729,26.979a4.8,4.8,0,0,0,4.32.178l73.439-42.4c1.106-.636.969-1.753-.311-2.492Z"
            transform="translate(-63.24 -81.766)"
            fill="#fff"
          />
          <path
            id="Path_12715"
            data-name="Path 12715"
            d="M147.352,94.086l-14.09,8.133,2.295,1.329,14.09-8.137Zm-32.768,7.141L137.151,88.2l-2.295-1.325L112.289,99.9Zm-6.543,13.552,37.573-21.7-2.295-1.325-37.577,21.7Zm5.282-1.045L84.75,130.228l2.3,1.325,28.569-16.494Zm17.073-9.86-14.089,8.137,2.3,1.325L132.69,105.2ZM109.347,101.6l-37.577,21.7,2.295,1.325,37.577-21.693ZM102.8,115.154,80.233,128.18l2.3,1.325,22.564-13.029ZM67.741,120.97l2.295,1.325,63.087-36.422-2.295-1.329ZM139.29,89.432,76.2,125.855l2.3,1.325,63.083-36.422Z"
            transform="translate(-50.704 -74.025)"
            fill="#4b596b"
          />
          <path
            id="Path_12716"
            data-name="Path 12716"
            d="M146.92,85.363,69.471,130.078l-6.23-3.6L140.69,81.766Z"
            transform="translate(-63.242 -81.765)"
            fill="#ebeff0"
          />
          <path
            id="Path_12717"
            data-name="Path 12717"
            d="M66.839,94.2a3.1,3.1,0,0,0,2.813-.015c.788-.451.8-1.181.026-1.624a3.1,3.1,0,0,0-2.813.015C66.078,93.029,66.066,93.756,66.839,94.2Z"
            transform="translate(-54.811 -52.612)"
            fill="#fff"
          />
          <g
            id="Group_1336"
            data-name="Group 1336"
            transform="translate(68.591 5.957)"
          >
            <path
              id="Path_12718"
              data-name="Path 12718"
              d="M81.712,85.061l2.626-1.516-.355-.206-2.626,1.516Z"
              transform="translate(-81.356 -83.339)"
              fill="#c8cbcc"
            />
            <path
              id="Path_12719"
              data-name="Path 12719"
              d="M81.948,85.2l2.626-1.516-.356-.206-2.626,1.516Z"
              transform="translate(-80.698 -82.959)"
              fill="#c8cbcc"
            />
            <path
              id="Path_12720"
              data-name="Path 12720"
              d="M82.185,85.334l2.626-1.516-.356-.206-2.626,1.517Z"
              transform="translate(-80.039 -82.578)"
              fill="#c8cbcc"
            />
          </g>
          <path
            id="Path_12721"
            data-name="Path 12721"
            d="M91.893,112l23.851-13.771c.663-.382.579-1.049-.182-1.492l-9.478-5.471a2.875,2.875,0,0,0-2.582-.106L79.647,104.927c-.659.382-.576,1.049.186,1.492l9.478,5.471A2.876,2.876,0,0,0,91.893,112Z"
            transform="translate(-18.766 -56.32)"
            fill="#e6e6e6"
          />
          <path
            id="Path_12722"
            data-name="Path 12722"
            d="M115.562,97.021l-9.478-5.471a2.875,2.875,0,0,0-2.582-.106L79.647,105.215a.852.852,0,0,0-.428.5.725.725,0,0,1,.428-.791L103.5,91.156a2.875,2.875,0,0,1,2.582.106l9.478,5.471c.485.28.693.655.61.988A1.171,1.171,0,0,0,115.562,97.021Z"
            transform="translate(-18.767 -56.32)"
            fill="#b3b3b3"
          />
        </g>
        <path
          id="Path_12723"
          data-name="Path 12723"
          d="M64.019,78.937v51.188l55.755-32.19Z"
          transform="translate(-30.322 -31.319)"
          fill="#fff"
          opacity="0.15"
        />
      </g>
    </svg>
  );
}
