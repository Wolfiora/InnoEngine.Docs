---
uid: api.702c68d13c3e9a20a4983ac9569a55b72523aef8bf7443d21a58d35b90c4c3a4
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GamePresentationSettings.CalculateViewport(System.Int32,System.Int32)"
source: xml
reviewed: 0a87763fd440a74a3a6882b2ed039163ab9cc9cef1e347f94500949ac73eca1b
title: "CalculateViewport"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Calculates the centered content region for an available presentation surface.

**Parameter `availableWidth`:** Positive available surface width in pixels or logical preview units.

**Parameter `availableHeight`:** Positive available surface height in pixels or logical preview units.

**Returns:** A positive region that fills the surface or fits the configured reference aspect ratio.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an available or reference dimension is not positive.
