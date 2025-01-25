import { Meta, StoryObj } from "@storybook/react";

import { RegisterPage } from "../../screens/RegisterPage";

const meta: Meta<typeof RegisterPage> = {
  component: RegisterPage,
};

export default meta;

type Story = StoryObj<typeof RegisterPage>;

export const Default: Story = {};
