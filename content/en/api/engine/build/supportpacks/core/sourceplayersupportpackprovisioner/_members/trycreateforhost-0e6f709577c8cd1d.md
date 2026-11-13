---
uid: api.0e6f709577c8cd1d86ead6dc0b0913eae4de81e290f91df322479ea860ed93dc
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.TryCreateForHost(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String})"
source: xml
reviewed: a9a22fdbf6740364177bbcdaa064a1d5ed8954cee37a932a08e27fc5e7ada945
title: "TryCreateForHost"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Finds the checkout that owns the running Editor or build command.

**Parameter `startDirectory`:** The host binary directory from which to search upward.

**Returns:** A source provisioner, or null when the host is a source-independent distribution.

**Exception `T:System.IO.DirectoryNotFoundException`:** An explicit `INNO_ENGINE_ROOT` does not identify a complete engine checkout.

**Parameter `publisher`:** The publisher containing the host-selected platform sources.

**Parameter `dotnetHost`:** The SDK executable explicitly selected by the host.

**Parameter `reportDiagnostic`:** The borrowed host reporter, retained only by the returned provisioner.
