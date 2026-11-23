---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: project.inno-testing-discovery-testlogger
kind: project

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners:
  - Inno.Testing.Discovery.TestLogger

# Authoring metadata. Edit these fields and the text below.
title: Test discovery logger
description: Consult the VSTest logger implementation when changing how the validation tooling collects test results.
---
# Test discovery logger

Consult the VSTest logger implementation when changing how the validation tooling collects test results.

- [Project definition for `Inno.Testing.Discovery.TestLogger`](https://github.com/Wolfiora/InnoEngine/blob/1fade7f94a78a9cafe21dab53e82a45418753238/tests/process/Inno.Testing.Discovery.TestLogger/Inno.Testing.Discovery.TestLogger.csproj)
- [`DiscoveryLogger` source](https://github.com/Wolfiora/InnoEngine/blob/1fade7f94a78a9cafe21dab53e82a45418753238/tests/process/Inno.Testing.Discovery.TestLogger/DiscoveryLogger.cs)
- [Select checks for your engine change](../../validate-change.md)
