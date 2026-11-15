---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e83dc15a575ca81684710232a0d5f7510d4c0cf1d9aea13f73358b13120deda6
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange)
title: EditorReloadCoordinator.Execute
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: f5c4509e33f3ef65b64ce9a58bb30789a1be55e73374c96cfb86af4ee7cc1a43

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `reload`:** The prepared assembly reload session to activate and complete.

**Parameter `externalChange`:** Content recovery prepared before type publication, applied before Editor recovery, and restored before old values.

## Returns

A monitor that observes cooperative unloading of assemblies retired by the committed reload.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `reload` is `null`.

**Exception `T:System.AggregateException`:** Thrown when activation fails and one or more feature or assembly rollback stages also fail.
