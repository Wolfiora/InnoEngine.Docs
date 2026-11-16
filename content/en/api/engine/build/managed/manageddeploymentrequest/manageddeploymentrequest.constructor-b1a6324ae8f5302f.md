---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b1a6324ae8f5302f05f981e7c54708b64df156b8aa212c29025ad7f4347cc1c7
symbol: engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentRequest.#ctor(System.String,System.String,System.String,System.String,System.String)
title: ManagedDeploymentRequest.Constructor
kind: api
owners:
- Inno.Build.Managed
apiSurface: source-clr
reviewed: 82b13a60c1bb46d05e0302531c3bbc27ddbd5a675cc87e2c9ab7f78709691143
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `projectPath`:** The prepared entry project with explicit code references, generated registrations and native inputs.

**Parameter `runtimeIdentifier`:** The managed toolchain's exact target identifier.

**Parameter `codeInputDirectory`:** The isolated directory containing the frozen code inputs referenced by the entry project.

**Parameter `outputDirectory`:** The empty build-owned staging directory; final installation remains the pipeline's responsibility.

**Parameter `logDirectory`:** The build-owned directory receiving process output and SDK selection evidence.
