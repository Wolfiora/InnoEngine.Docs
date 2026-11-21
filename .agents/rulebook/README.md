# Documentation rulebook

- [Documentation](documentation.md): content authority, English, examples, API contracts, and migration.
- [Presentation](presentation.md): navigation, theme, accessibility, and visual verification.
- [Delivery](delivery.md): evidence, draft/main publication, and artifact ownership.

Each rule file states its own `paths` and `tags` in front matter, in the format the [engine rulebook](https://github.com/Wolfiora/InnoEngine/blob/master/.agents/rulebook/README.md) defines. Engine tasks select these files with the engine rule script and an explicit `-DocsRoot`.

Engine architecture and coding rules remain in [InnoEngine](https://github.com/Wolfiora/InnoEngine/tree/master/.agents/rulebook). Read the rules at the engine revision being modified; this repository does not maintain a second copy.
