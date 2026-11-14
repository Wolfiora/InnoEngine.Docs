---
uid: api.f85b0f0dbe749ee36ccbd0cdee40f66a54df3edc1d2f6758dc43d1dcefbc4fa7
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.CreateReloadChange"
source: xml
reviewed: 09f0a523d420295d1b5a8324e0d492d5fb9e05c31a35a3e15400f6f760b4060b
title: "ProjectSettingsStore.CreateReloadChange"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates a five-phase settings change for the host's shared generation transaction.

**Returns:** An owner-thread change that captures neutral effective values before publication, rebuilds against candidate types, and restores exact previous values and contributors without writing the project document on rollback.
