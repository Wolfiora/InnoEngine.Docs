---
uid: api.8a5e0b370d78d2e3783659a4fa02e16802d034718a68dccd7e00fdd98f1c0306
symbol: "engine:Inno.References:M:Inno.References.IReferenceRecoveryParticipant.Validate(System.Collections.Generic.IReadOnlyList{Inno.References.ReferenceRecoveryChange})"
source: xml
reviewed: bc8ba6d0c2109ddd37fa4e0119fe3c20d924c6dd0228ebb701002f1f7ba1cb6c
title: "Validate"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Validates resolved slots after provisional structures and values have been applied, before commit.

**Parameter `changes`:** The complete immutable set of candidate recovery changes; optional missing slots remain preserved.
