---
uid: api.f85b0f0dbe749ee36ccbd0cdee40f66a54df3edc1d2f6758dc43d1dcefbc4fa7
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.CreateReloadChange"
source: xml
reviewed: ffb5854a4ebb398ed7436742167391f82f3dbdfecdb0be467adbe8833f953de1
title: "CreateReloadChange"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates a five-phase settings change for the host's shared generation transaction.

**Returns:** An owner-thread change that captures neutral effective values before publication, rebuilds against candidate types, and restores exact previous values and contributors without writing the project document on rollback.
