---
title: "IAssemblyCatalogParticipant"
description: "Reference for IAssemblyCatalogParticipant in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.11bf60feb42a33f6
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `IAssemblyCatalogParticipant`

This reference describes `IAssemblyCatalogParticipant` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Prepare`](#api-d6b69ca08d091a4d) | Method |

## Type declaration

<a id="api-11bf60feb42a33f6"></a>
<!-- api: T:Inno.Extensibility.Modules.IAssemblyCatalogParticipant 65283a948134574abba62494268e28e5954240d464937098a62cfe46fdf53957 -->

```csharp
public interface Inno.Extensibility.Modules.IAssemblyCatalogParticipant
```

Builds transactional derived state for an assembly catalog generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogParticipant.cs#L6).

## `Prepare`

<a id="api-d6b69ca08d091a4d"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogParticipant.Prepare(Inno.Extensibility.Modules.AssemblyCatalogSnapshot) 7fc42b1200fe4894a7116c4a3a2f9ef4770465b9c13b45cbf2940e6254fdd455 -->

```csharp
Inno.Extensibility.Modules.IAssemblyCatalogTransaction Inno.Extensibility.Modules.IAssemblyCatalogParticipant.Prepare(Inno.Extensibility.Modules.AssemblyCatalogSnapshot catalog)
```

Validates a candidate catalog and prepares state without publishing it.

**Parameter `catalog`:** The complete candidate assembly catalog.

**Returns:** A transaction controlling publication, completion, and rollback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogParticipant.cs#L17).
