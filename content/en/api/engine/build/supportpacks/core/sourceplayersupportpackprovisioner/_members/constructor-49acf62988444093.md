---
uid: api.49acf6298844409395dd0029cdf563f74aa75430d7150c589b6edbed3e5a7ef6
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.#ctor(System.String,Inno.Build.SupportPacks.PlayerSupportPackPublisher,System.String,System.Action{System.String})"
source: xml
reviewed: f1cc721a556179bce49a41bf58f45b3e0db5a0c073225151934ca30373f0504d
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Creates a provisioner for a complete engine checkout.

**Parameter `engineRoot`:** The directory containing InnoEngine.sln and the Player project.

**Exception `T:System.IO.DirectoryNotFoundException`:** The directory is not an engine checkout.

**Parameter `publisher`:** The publisher containing the host-selected platform sources.

**Parameter `dotnetHost`:** The SDK executable explicitly selected by the host.

**Parameter `reportDiagnostic`:** The borrowed host reporter for successful-publication indexing and cleanup diagnostics.
