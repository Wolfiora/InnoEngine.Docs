---
uid: api.19ff6a7f383c9d66a9d159e60eb7f38a4b645dea8b35bfc49c1d3240a0d53c6b
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.#ctor(Inno.Editor.Inspection.PropertyDrawerRegistry,Inno.Editor.Inspection.InspectorAttributeDrawerRegistry,Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Inspection.IInspectionPropertyEditService,Inno.Core.Logging.LogRouter)"
source: xml
reviewed: 5cf17960645f5de4f7a710614ae116951a09c23bb701f1966a04315c6436ceb4
title: "Constructor"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates a serialized property renderer over one drawer registry and feature-owned edit service.

**Parameter `drawers`:** The property drawer registry used for runtime type resolution.

**Parameter `attributes`:** The generation-aware registry that interprets Inspector presentation attributes.

**Parameter `interactions`:** The active editor interaction entry point.

**Parameter `edits`:** The feature-owned service used to apply and record property changes.

**Parameter `logs`:** The host-owned log router used to report isolated drawer failures.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawers`, `interactions`, or `edits` is `null`.
