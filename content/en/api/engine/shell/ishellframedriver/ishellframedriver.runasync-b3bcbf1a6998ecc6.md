---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b3bcbf1a6998ecc6a5e818f904058fb40b7d669905f95940f0fedc49a785fcc8
symbol: engine:Inno.Shell:M:Inno.Shell.IShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken)
title: IShellFrameDriver.RunAsync
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
reviewed: a15f571f8a9477d185fdbe352e99c2ab7bf00ac2b42d2699daf2246e81f3852c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `advanceFrame`:** Executes one frame and returns true when the host should schedule another frame.

**Parameter `cancellationToken`:** Requests termination before the next frame.

## Returns

Completion after scheduling ends; callback failures must propagate to the shell.
