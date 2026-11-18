---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b3bcbf1a6998ecc6a5e818f904058fb40b7d669905f95940f0fedc49a785fcc8
symbol: engine:Inno.Shell:M:Inno.Shell.IShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken)
title: IShellFrameDriver.RunAsync
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
sourceFingerprint: ec5547b103a91c2018e0cdeea9ea07dea2122afa8a51f66e96e6fd583d2bd978
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
