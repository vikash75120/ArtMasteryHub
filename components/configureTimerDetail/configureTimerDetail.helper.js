export const appModuleSettings = {
  title: "Apps Selection",
  id: "appSelection",
  content: [
    {
      id: 0,
      label: "radio_group",
      fields: [
        {
          id: 0,
          label: "Unsplash",
          value: "unsplash",
        },
        {
          id: 1,
          label: "Deviant Art",
          value: "deviant_art",
        },
        {
          id: 2,
          label: "Instagram",
          value: "instagram",
        },
      ],
    },
  ],
};

export const libraryModuleSettings = {
  title: "library Selection",
  id: "librarySelection",
  content: [
    {
      id: 0,
      label: "input",
      fields: [
        {
          id: 0,
          label: "Enter the library name",
          Placeholder: "Library name",
        },
      ],
    },
  ],
};

export const timerModuleSettings = {
  title: "Timer Selection",
  id: "timerSelection",
  content: [
    {
      id: 0,
      label: "timer_group",
      fields: [
        {
          id: 0,
          label: "Preparation Time",
        },
      ],
    },
    {
      id: 1,
      label: "timer_group",
      fields: [
        {
          id: 0,
          label: "Round Time",
        },
      ],
    },
    {
      id: 2,
      label: "timer_group",
      fields: [
        {
          id: 0,
          label: "Rest Time",
        },
      ],
    },
  ],
};
