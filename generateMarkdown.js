function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.description}
# ${data.installation}
# ${data.usage}
# ${data.contribution}
# ${data.test}
# ${data.github}
`;
}

module.exports = generateMarkdown;