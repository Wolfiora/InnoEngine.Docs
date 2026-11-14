---
uid: api.19ff6a7f383c9d66a9d159e60eb7f38a4b645dea8b35bfc49c1d3240a0d53c6b
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.#ctor(Inno.Editor.Inspection.PropertyDrawerRegistry,Inno.Editor.Inspection.InspectorAttributeDrawerRegistry,Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Inspection.IInspectionPropertyEditService,Inno.Core.Logging.LogRouter)"
source: xml
reviewed: d0203fbb2eabdfeebaf649ae372252e928fff8aa6bbaf2e616000a8eee0b6faf
title: "SerializedPropertyRenderer.Constructor"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates a serialized property renderer over one drawer registry and feature-owned edit service.

## Parameters

**Parameter `drawers`:** The property drawer registry used for runtime type resolution.

**Parameter `attributes`:** The generation-aware registry that interprets Inspector presentation attributes.

**Parameter `interactions`:** The active editor interaction entry point.

**Parameter `edits`:** The feature-owned service used to apply and record property changes.

**Parameter `logs`:** The host-owned log router used to report isolated drawer failures.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `drawers`, `interactions`, or `edits` is `null`.
