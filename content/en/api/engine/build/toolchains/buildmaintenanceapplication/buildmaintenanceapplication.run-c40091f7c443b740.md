---
uid: api.c40091f7c443b74013cd65da2bdcd4c6b370502c1fc45051f5fe87a624c3e407
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildMaintenanceApplication.Run(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 72f15be0f715d276babf4ebf88c0320371e4416c18ae716e24638bc233411b52
title: "BuildMaintenanceApplication.Run"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Executes the cache-clean command using the checkout's explicit publisher catalog.

## Parameters

**Parameter `arguments`:** The clean command and its validated named options.

**Parameter `cancellationToken`:** Cancels planning or retirement without deleting protected outputs.

## Returns

Zero on success, two on cancellation, or one with a diagnostic on failure.
