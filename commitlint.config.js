export default {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "subject-leading-capital": ({ subject }) => {
          if (!subject) {
            return [false, "Subject is required"];
          }

          const firstChar = subject.charAt(0);
          const isUpperCase = /^[A-Z]/.test(firstChar);

          return [
            isUpperCase,
            'Subject must start with an uppercase letter (e.g., "feat: Add feature" not "feat: add feature")',
          ];
        },
      },
    },
  ],
  rules: {
    "header-max-length": [2, "always", 150],
    "subject-leading-capital": [2, "always"],
    "subject-case": [0],
  },
};
