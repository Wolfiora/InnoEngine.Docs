---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bd49717abdc5c2cd7fda512b8bbaee4034d2fa24737b803d5684373e49502687
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.IScriptReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange)
title: IScriptReloadCoordinator.Execute
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
reviewed: 8ad10a28e33965c1ee801c4644cbc606f618b51b6c524f6a91d2577aea8296fe
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
