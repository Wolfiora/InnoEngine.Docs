---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: project.inno-testing-build
kind: project

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners:
  - Inno.Testing.Build

# Authoring metadata. Edit these fields and the text below.
title: Build pipeline fixture
description: Use the shared build pipeline fixture to arrange the inputs consumed by build tests.
---
# Build pipeline fixture

Use the shared build pipeline fixture to arrange the inputs consumed by build tests.

- [Project definition for `Inno.Testing.Build`](https://github.com/Wolfiora/InnoEngine/blob/1fade7f94a78a9cafe21dab53e82a45418753238/tests/build/fixtures/Inno.Testing.Build/Inno.Testing.Build.csproj)
- [`BuildPipelineFixture` source](https://github.com/Wolfiora/InnoEngine/blob/1fade7f94a78a9cafe21dab53e82a45418753238/tests/build/fixtures/Inno.Testing.Build/BuildPipelineFixture.cs)
- [Select checks for your engine change](../../validate-change.md)
