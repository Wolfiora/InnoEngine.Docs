---
uid: api.feb65ffbad2d39b10c643aa52cb62da92f59ab2d9b5379a5cf229d1bc6a662b5
symbol: "engine:Inno.Build:M:Inno.Build.IGameContentCompiler.CompileAsync(Inno.Build.GameBuildContentContext,System.Threading.CancellationToken)"
source: xml
reviewed: 387781ed7fce80687a580e4754b59a5b9028cb56215cfad5eff6f4f5630a4ad4
title: "CompileAsync"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Writes target content into the current operation's isolated staging directory.

**Parameter `context`:** The borrowed authoring generation and operation-owned content destination.

**Parameter `cancellationToken`:** Cancels compilation before publication; associated work must finish before returning.

**Returns:** An operation completing after every required artifact is staged, or faulting on failure.

**Exception `T:System.OperationCanceledException`:** Cancellation was requested before compilation completed.
