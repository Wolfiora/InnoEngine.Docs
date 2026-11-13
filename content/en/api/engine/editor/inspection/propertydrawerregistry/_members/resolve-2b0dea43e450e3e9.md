---
uid: api.2b0dea43e450e3e9271c68210ee9e433bff10eceaa3071c9928b49b4a996df1d
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerRegistry.Resolve(System.Type)"
source: xml
reviewed: 9841010e1c13ab74384cd90ec344988f25621ac427f63258aaad581f785c9683
title: "Resolve"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Resolves the most specific drawer for a declared property type.

**Parameter `propertyType`:** The declared serialized property type to resolve.

**Returns:** The most specific registered drawer, or the unsupported-value fallback.

**Exception `T:System.ArgumentNullException`:** Thrown when `propertyType` is `null`.
