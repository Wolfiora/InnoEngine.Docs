---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.702c68d13c3e9a20a4983ac9569a55b72523aef8bf7443d21a58d35b90c4c3a4
symbol: engine:Inno.Runtime:M:Inno.Runtime.GamePresentationSettings.CalculateViewport(System.Int32,System.Int32)
title: GamePresentationSettings.CalculateViewport
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 5b501bd00449b6dea1d858c64f1d4b94015cdc564b444339ff86acb5fd55278b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `availableWidth`:** Positive available surface width in pixels or logical preview units.

**Parameter `availableHeight`:** Positive available surface height in pixels or logical preview units.

## Returns

A positive region that fills the surface or fits the configured reference aspect ratio.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an available or reference dimension is not positive.
