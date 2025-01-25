import { Meta, StoryObj } from "@storybook/react";

import { ForgetPassword } from "../../screens/ForgotPassword";

const meta: Meta<typeof ForgetPassword> = {
  component: ForgetPassword,
};

export default meta;

type Story = StoryObj<typeof ForgetPassword>;

export const Default: Story = {};
