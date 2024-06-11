import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, VStack, Image, Icon, Spinner } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { getCompanies } from '../../services';
import { EvilIcons } from '@expo/vector-icons';
import { HomeHeader } from './components/HomeHeader';
import { RouteNames } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { WelcomeAlert } from './components/WelcomeAlert';
import { setCompanies, setSelectedCompany } from '../../store/company.slice';
import coordinates from '../MapPage/coordinates.json';

function HomeScreen() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state) => state?.company.selectedCompany);
  const companyList = useSelector((state) => state?.company.companies);
  const user = useSelector((state) => state?.auth.user);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoading(true);
      try {
        const response = await getCompanies();
        const companyData = response._embedded.entrepriseDTOModelList.map((item, index) => ({
          ...item,
          ...coordinates[index],
        }));
        dispatch(setCompanies(companyData));
        setIsLoading(false);
      } catch (error) {
        console.log('Error', error);
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const viewLocation = async (company: any) => {
    dispatch(setSelectedCompany(company));
    console.log('Company:', company);
    await navigation.navigate(RouteNames.MAP);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader title="Home" user={user} />
      <DashboardLayout>
        {isLoading ? (
          <VStack h="100%" justifyContent="center" alignItems="center">
            <WelcomeAlert user={user.nom} />
            <Spinner size={40} color="primary.200" />
          </VStack>
        ) : (
          <FlatList
            data={companyList}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={<Text fontSize={26}>Companies</Text>}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => viewLocation(item)}>
                <Box borderBottomWidth="1" borderColor="coolGray.200" py="4">
                  <HStack space={3} justifyContent="space-between" alignItems="center">
                    {item.logo ? (
                      <Image size="48px" source={{ uri: item.logo }} alt={`${item.nom} logo`} />
                    ) : null}
                    <Text>{item.nom}</Text>
                    <Text>{item.phone}</Text>
                    <Icon as={EvilIcons} name="location" color="primary.200" size="26px" />
                  </HStack>
                </Box>
              </TouchableOpacity>
            )}
          />
        )}
      </DashboardLayout>
    </SafeAreaView>
  );
}

export { HomeScreen };
