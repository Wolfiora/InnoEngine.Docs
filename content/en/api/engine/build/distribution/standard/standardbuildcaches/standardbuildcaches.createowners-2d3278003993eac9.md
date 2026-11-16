---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2d3278003993eac94e6edcefc437c9441dd0e3697385704ad0d0bcbcf5dd2ab8
symbol: engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildCaches.CreateOwners(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeComponentDescriptor})
title: StandardBuildCaches.CreateOwners
kind: api
owners:
- Inno.Build.Distribution.Standard
apiSurface: source-clr
reviewed: 4b49603d3bd4744a4cd3bbe2be1380e3a312a0c84ea1f0aed2f0ec730c495fb2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The absolute engine checkout containing the artifact roots.

**Parameter `components`:** The actual registered component owners; shared toolchain roots are registered once.

## Returns

Immutable owner registrations with current-generation and transitive dependency protection.

## Exceptions

**Exception `T:System.ArgumentException`:** The root is blank or relative.
