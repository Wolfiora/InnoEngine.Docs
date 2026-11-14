---
uid: api.702c68d13c3e9a20a4983ac9569a55b72523aef8bf7443d21a58d35b90c4c3a4
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GamePresentationSettings.CalculateViewport(System.Int32,System.Int32)"
source: xml
reviewed: 7fc7da6cbf3f36146268a29002303d17e470a92e286d5dd3edcd5811f75de74e
title: "GamePresentationSettings.CalculateViewport"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Calculates the centered content region for an available presentation surface.

## Parameters

**Parameter `availableWidth`:** Positive available surface width in pixels or logical preview units.

**Parameter `availableHeight`:** Positive available surface height in pixels or logical preview units.

## Returns

A positive region that fills the surface or fits the configured reference aspect ratio.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an available or reference dimension is not positive.
