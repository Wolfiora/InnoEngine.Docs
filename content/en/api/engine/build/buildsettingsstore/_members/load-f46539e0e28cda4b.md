---
uid: api.f46539e0e28cda4beb33c0bf3878c0162fe4fc2e16fe1b1100c166668d822af0
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettingsStore.Load"
source: xml
reviewed: 77847dda77ec0b4cc7e0d78988ed59e7b685131b25ccf5bc6624e9fe66a189be
title: "Load"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Loads the saved settings or returns an isolated copy of the canonical defaults.

**Returns:** A newly owned settings object.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the saved document is malformed.
