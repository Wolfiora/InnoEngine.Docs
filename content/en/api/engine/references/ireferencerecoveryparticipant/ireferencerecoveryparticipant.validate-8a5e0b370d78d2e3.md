---
uid: api.8a5e0b370d78d2e3783659a4fa02e16802d034718a68dccd7e00fdd98f1c0306
symbol: "engine:Inno.References:M:Inno.References.IReferenceRecoveryParticipant.Validate(System.Collections.Generic.IReadOnlyList{Inno.References.ReferenceRecoveryChange})"
source: xml
reviewed: 55a32e18381f2784908531763fef706393fdf20482bfabdcabb02d8f07a5967c
title: "IReferenceRecoveryParticipant.Validate"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Validates resolved slots after provisional structures and values have been applied, before commit.

## Parameters

**Parameter `changes`:** The complete immutable set of candidate recovery changes; optional missing slots remain preserved.
