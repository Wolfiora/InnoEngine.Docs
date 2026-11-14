---
uid: api.843a6a1488599025a15efdd44b58b1ebf7e3d733839ceda333423e4eaeb930af
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.Stop(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: 3791e582193c731a80cb433eaa8244f146ea6b16f99075d8cf43ff99608b942d
title: "EditorModule.Stop"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Stops the module before the containing extension generation is released.

## Remarks

Also compensates a partially failed Start. Completed stops are idempotent; pending stops may be retried.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Live work still depends on this module. Its owner must retain it and retry Stop before disposal.
