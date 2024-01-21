npx -y npm-check-updates@latest -u

cd app && npx -y npm-check-updates@latest -u && cd ..

cd packages
cd cc3-design && npx -y npm-check-updates@latest -u && cd ..
cd cc3-tsconfig && npx -y npm-check-updates@latest -u && cd ..
cd eslint-config-cc3 && npx -y npm-check-updates@latest -u && cd ../..

echo "$PWD"
