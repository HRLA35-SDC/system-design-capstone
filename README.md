# Nike Product Look-up Web-Scale

> Web-scaled a legacy codebase to handle large amounts of traffic and data. Increased database to hold over 10,000,000 records.

## Related Projects

  - https://github.com/HRLA35-SDC/Nyke-Nav-SDC
  - https://github.com/HRLA35-SDC/Nyke-Nav-Nginx
  - https://github.com/HRLA35-SDC/Brandon-s-Repo--Body

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Metrics](#metrics)

## Usage

- Fork or clone
- Install dependencies
  - [Click](#development) to see installation procedure

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
navigate to directory "database-pg"
node createDataFile.js
node seedPg.js
```
## Metrics

Metrics from horizontally scaling on several EC2 instances can be found [here](https://www.dropbox.com/sh/pj7kdtos0x83zuy/AAAg0RO1BYXRkpeJHQek0B4Oa?dl=0).
