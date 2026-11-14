---
uid: api.f46539e0e28cda4beb33c0bf3878c0162fe4fc2e16fe1b1100c166668d822af0
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettingsStore.Load"
source: xml
reviewed: 1eaecb47be4d075064d6d37e6828988bfe454924cda17ccca689d3fdff3f1ede
title: "BuildSettingsStore.Load"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Loads the saved settings or returns an isolated copy of the canonical defaults.

## Returns

A newly owned settings object.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the saved document is malformed.
