import type { Preview } from "@storybook/react";
import { withRouter, withI18n } from "./decorators";
import "../src/index.css";

const decorators = [withRouter, withI18n];
const parameters = {
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

const preview: Preview = {
  decorators,
  parameters,
};

export default preview;

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internalization Locale",
    toolbar: {
      icon: "globe",
      items: [
        {
          value: "en",
          title: "English",
        },
        {
          value: "de",
          title: "Deutsch",
        },
        {
          value: "fr",
          title: "French",
        },
      ],
      showname: true,
    },
  },
};
