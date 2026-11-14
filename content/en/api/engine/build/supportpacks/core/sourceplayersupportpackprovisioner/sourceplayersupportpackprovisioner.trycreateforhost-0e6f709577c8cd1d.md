---
uid: api.0e6f709577c8cd1d86ead6dc0b0913eae4de81e290f91df322479ea860ed93dc
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.TryCreateForHost(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String})"
source: xml
reviewed: a641d607950324dbde56a6fbb2ee24bf3de4ea65718b17861e5260ddb34c0ec5
title: "SourcePlayerSupportPackProvisioner.TryCreateForHost"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Finds the checkout that owns the running Editor or build command.

## Parameters

**Parameter `startDirectory`:** The host binary directory from which to search upward.

**Parameter `publisher`:** The publisher containing the host-selected platform sources.

**Parameter `dotnetHost`:** The SDK executable explicitly selected by the host.

**Parameter `reportDiagnostic`:** The borrowed host reporter, retained only by the returned provisioner.

## Returns

A source provisioner, or null when the host is a source-independent distribution.

## Exceptions

**Exception `T:System.IO.DirectoryNotFoundException`:** An explicit `INNO_ENGINE_ROOT` does not identify a complete engine checkout.
