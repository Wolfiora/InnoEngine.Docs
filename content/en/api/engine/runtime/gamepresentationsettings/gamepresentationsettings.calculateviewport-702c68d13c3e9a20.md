---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.702c68d13c3e9a20a4983ac9569a55b72523aef8bf7443d21a58d35b90c4c3a4
symbol: engine:Inno.Runtime:M:Inno.Runtime.GamePresentationSettings.CalculateViewport(System.Int32,System.Int32)
title: GamePresentationSettings.CalculateViewport
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 7fc7da6cbf3f36146268a29002303d17e470a92e286d5dd3edcd5811f75de74e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `availableWidth`:** Positive available surface width in pixels or logical preview units.

**Parameter `availableHeight`:** Positive available surface height in pixels or logical preview units.

## Returns

A positive region that fills the surface or fits the configured reference aspect ratio.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an available or reference dimension is not positive.
