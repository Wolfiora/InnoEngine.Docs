---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.19ff6a7f383c9d66a9d159e60eb7f38a4b645dea8b35bfc49c1d3240a0d53c6b
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.#ctor(Inno.Editor.Inspection.PropertyDrawerRegistry,Inno.Editor.Inspection.InspectorAttributeDrawerRegistry,Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Inspection.IInspectionPropertyEditService,Inno.Core.Logging.LogRouter)
title: SerializedPropertyRenderer.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
sourceFingerprint: d2efc8858c6dc4f5b6f542ea5ff682d3cc110bc8d177c15455222712bdb25b62
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `drawers`:** The property drawer registry used for runtime type resolution.

**Parameter `attributes`:** The generation-aware registry that interprets Inspector presentation attributes.

**Parameter `interactions`:** The active editor interaction entry point.

**Parameter `edits`:** The feature-owned service used to apply and record property changes.

**Parameter `logs`:** The host-owned log router used to report isolated drawer failures.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `drawers`, `interactions`, or `edits` is `null`.
