---
uid: api.directory.engine.editor.inspection
title: "Inspection"
kind: landing
owners: []
---

# Inspection

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [IInspectionDrawer](iinspectiondrawer/index.md) | Defines the runtime bridge used to render a discovered inspection drawer. |
| [IInspectionIconProvider&lt;TTarget&gt;](iinspectioniconprovider/index.md) | Resolves a presentation icon for inspected targets owned by another editor feature. |
| [IInspectionPropertyEditService](iinspectionpropertyeditservice/index.md) | Applies one root serialized-property mutation through the history mechanism owned by a feature. |
| [IInspectorAttributeDrawer](iinspectorattributedrawer/index.md) | Extends serialized-property presentation with reusable attribute-driven behavior. |
| [InspectionDrawContext](inspectiondrawcontext/index.md) | Provides services and state to an inspector drawer. |
| [InspectionDrawer&lt;TTarget&gt;](inspectiondrawer/index.md) | Provides the target-specific header presentation and body drawing behavior for an inspected target. |
| [InspectionDrawerAttribute](inspectiondrawerattribute/index.md) | Associates an inspector drawer with a selected target type. |
| [InspectionDrawerFactory](inspectiondrawerfactory/index.md) | Creates one discovered inspection drawer through the owning editor composition root. |
| [InspectionDrawerRegistry](inspectiondrawerregistry/index.md) | Discovers and resolves inspection drawers through the active type catalog. |
| [InspectorAttributeDrawContext](inspectorattributedrawcontext/index.md) | Carries the mutable presentation state of one attribute-annotated Inspector property. |
| [InspectorAttributeDrawerAttribute](inspectorattributedrawerattribute/index.md) | Associates an Inspector attribute drawer with an attribute type. |
| [InspectorAttributeDrawerRegistry](inspectorattributedrawerregistry/index.md) | Discovers generation-aware Inspector attribute drawers and applies them in declaration order. |
| [IPropertyDrawer](ipropertydrawer/index.md) | Draws and optionally edits one serialized property value. |
| [PropertyDrawContext](propertydrawcontext/index.md) | Encapsulates one editable property path and its drawing services. |
| [PropertyDrawerAttribute](propertydrawerattribute/index.md) | Associates a property drawer with a declared property type. |
| [PropertyDrawerRegistry](propertydrawerregistry/index.md) | Discovers and resolves serialized property drawers through the active type catalog. |
| [SerializedPropertyRenderer](serializedpropertyrenderer/index.md) | Resolves drawers and renders serialized property paths with isolated error handling. |

