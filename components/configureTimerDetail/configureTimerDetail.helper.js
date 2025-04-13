export const appModuleSettings = {
  title: "Apps Selection",
  id: "appSelection",
  content: [
    {
      id: 0,
      label: "radio_group",
      fields: [
        {
          id: "unsplash",
          label: "Unsplash",
          value: "unsplash",
        },
        {
          id: "deviant_art",
          label: "Deviant Art",
          value: "deviant_art",
        },
        {
          id: "instagram", 
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
          id: "library_name",
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
          id: "preparation_time",
          label: "Preparation Time",
        },
      ],
    },
    {
      id: 1,
      label: "timer_group",
      fields: [
        {
          id: "round_time",
          label: "Round Time",
        },
      ],
    },
    {
      id: 2,
      label: "timer_group",
      fields: [
        {
          id: "rest_time",
          label: "Rest Time",
        },
      ],
    },
  ],
};
