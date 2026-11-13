---
uid: api.bd49717abdc5c2cd7fda512b8bbaee4034d2fa24737b803d5684373e49502687
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.IScriptReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange)"
source: xml
reviewed: 4e78904527279746cc2c771637179f06d8320d4fb46155ca6c833a6cc8d8321e
title: "Execute"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Commits a prepared assembly reload together with dependent host state.

**Parameter `reload`:** The prepared assembly reload session to activate and complete.

**Parameter `externalChange`:** Optional five-phase content change; captured before publication and restored before domain property recovery.

**Returns:** A monitor observing cooperative unload of assemblies retired by the committed generation.
