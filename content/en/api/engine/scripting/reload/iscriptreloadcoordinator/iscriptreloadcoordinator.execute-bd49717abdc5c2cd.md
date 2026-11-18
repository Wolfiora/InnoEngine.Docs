---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bd49717abdc5c2cd7fda512b8bbaee4034d2fa24737b803d5684373e49502687
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.IScriptReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange)
title: IScriptReloadCoordinator.Execute
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: bd262ccfd179a4c0f4b1845ec9fa2697a1e185b5017855e3cd393eea85df5e68
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `reload`:** The prepared assembly reload session to activate and complete.

**Parameter `externalChange`:** Optional five-phase content change; captured before publication and restored before domain property recovery.

## Returns

A monitor observing cooperative unload of assemblies retired by the committed generation.
