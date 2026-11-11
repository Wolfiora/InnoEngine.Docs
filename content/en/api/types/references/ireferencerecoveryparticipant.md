---
title: "IReferenceRecoveryParticipant"
description: "Reference for IReferenceRecoveryParticipant in Inno.References."
uid: api.inno.references.378d66627b415a97
kind: api
owners:
  - Inno.References
apiSurface: source-clr
contracts:
  - project.inno-references
---
# `IReferenceRecoveryParticipant`

This reference describes `IReferenceRecoveryParticipant` in `Inno.References`. Read the [shared contract](../../projects/inno-references.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `Inno.Extensibility.Reload.IGenerationChange`.

## Members

| Member | Kind |
| --- | --- |
| [`Validate`](#api-29f5da24bd317785) | Method |

## Type declaration

<a id="api-378d66627b415a97"></a>
<!-- api: T:Inno.References.IReferenceRecoveryParticipant a9bfedcd95383063b391d5485db18a882ea38f3de1bc5a4db1608f9fe44c4ab4 -->

```csharp
public interface Inno.References.IReferenceRecoveryParticipant : Inno.Extensibility.Reload.IGenerationChange
```

Applies domain-owned missing and recovered representations as one candidate transaction participant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/IReferenceRecoveryParticipant.cs#L9).

## `Validate`

<a id="api-29f5da24bd317785"></a>
<!-- api: M:Inno.References.IReferenceRecoveryParticipant.Validate(System.Collections.Generic.IReadOnlyList{Inno.References.ReferenceRecoveryChange}) 79f149c99e6bd71b4bde54266bbdf19f441d8250d0641bcd711b814e9cbda0dc -->

```csharp
void Inno.References.IReferenceRecoveryParticipant.Validate(System.Collections.Generic.IReadOnlyList<Inno.References.ReferenceRecoveryChange> changes)
```

Validates resolved slots after provisional structures and values have been applied, before commit.

**Parameter `changes`:** The complete immutable set of candidate recovery changes; optional missing slots remain preserved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/content/references/Inno.References/IReferenceRecoveryParticipant.cs#L17).
