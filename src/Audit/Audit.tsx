import React, { useState } from 'react';
import { useFormik } from 'formik';
import { PageTitle } from '../../../_metronic/layout/core';
import { useIntl } from 'react-intl';
import * as Yup from 'yup';
import SplashScreen from 'App/SplashScreen';
import Loader from 'App/BeatLoader';
import NewAuditModal from './modals/NewAuditModal';
import ManageAuditModal from './modals/ManageAuditModal';
import MapModal from './modals/MapModal';
import AssetMinimalDetailModal from 'App/Pages/Checkout/Modal/AssetMinimalDetailModal';
import './Audit.css';

interface Asset {
    id: string;
    description: string;
    status: string;
    assignedTo: string;
    site: string;
    location: string;
}

const Audit: React.FC = () => {
    const intl = useIntl();
    const isLoading = false;
    const [newAuditModal, setNewAuditModal] = useState<boolean>(false);
    const handleClose = (): void => setNewAuditModal(false);
    const handleNewAuditModal = (): void => setNewAuditModal(true);
    const [manageAuditModal, setManageAuditModal] = useState<boolean>(false);
    const closeManageAuditModal = (): void => setManageAuditModal(false);
    const handleManageAuditModal = (): void => setManageAuditModal(true);
    const [pendingAudit, setPendingAudit] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
    const [assetMinimalDetail, setAssetMinimalDetail] = useState<boolean>(false);
    const [mapShow, setMapShow] = useState(false);
    const handleMapShow = () => setMapShow(true);
    const handleMapClose = () => setMapShow(false);

    const formik = useFormik({
        initialValues: {
            auditName: '',
            auditSite: '',
            auditLocation: '',
            category: '',
            assetIds: '',
        },
        validationSchema: Yup.object({
            auditName: Yup.string().required('Audit name reference is required.'),
            auditSite: Yup.string().required('Site reference is required.'),
            auditLocation: Yup.string().required('Location reference is required.'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const pendingAuditHandler = () => {
        setPendingAudit(!pendingAudit)
    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const assetsData: Asset[] = [
        { id: 'Asset-10', description: 'Asset-10', status: 'Available', assignedTo: 'Ahmed Raza Raza', site: '17 N Johar Town Lahore', location: '17 N' },
        { id: 'Asset-11', description: 'Asset-11', status: 'Available', assignedTo: 'Ahmed Raza Raza', site: '17 N Johar Town Lahore', location: '17 N' },
        { id: 'Asset-12', description: 'Asset-12', status: 'Available', assignedTo: 'Ahmed Raza Raza', site: '17 N Johar Town Lahore', location: '17 N' },
    ];
    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedAssets([]);
        } else {
            setSelectedAssets(assetsData.map(asset => asset.id));
        }
        setSelectAll(!selectAll);
    };
    const handleAssetChange = (id: string) => {
        if (selectedAssets.includes(id)) {
            setSelectedAssets(selectedAssets.filter(assetId => assetId !== id));
        } else {
            setSelectedAssets([...selectedAssets, id]);
        }
    };
    const assetMinimalHandler = (asset: Asset) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setAssetMinimalDetail(true);
    };
    const handleModalClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setAssetMinimalDetail(false);
    };

    return (
        <>
            <SplashScreen isLoadingTemplate={!isLoading} />
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Audit' })}</PageTitle>
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0">
                    <div className="card-title m-0">
                        <h3 className="fw-bolder m-0">
                            <span className="me-2 align-middle">
                                <i className="la la-file-alt fs-2"></i>
                            </span>
                            Audit
                        </h3>
                    </div>
                </div>
                <div id="kt_account_profile_details" className="collapse show">
                    <div className="form">
                        <div className="card-body border-top p-lg-9 p-md-7 p-6">
                            <form className='audit-form' onSubmit={formik.handleSubmit}>
                                <div className="audit-container">
                                    <div className="audit-section">
                                        <h5 className='no-of-step'>Step 1: Set Audit Name</h5>
                                        <div className="audit-row d-md-flex align-item-center justify-content-md-center justify-content-start d-sm-flex d-sm-flex-column">
                                            <label htmlFor="auditName" className="form-label">Audit Name *</label>
                                            <div className="form-group  mb-3 mb-md-0 w-100 w-md-auto">
                                                <select
                                                    id="auditName"
                                                    name="auditName"
                                                    className={`form-control form-select${formik.touched.auditName && formik.errors.auditName ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.auditName}
                                                >
                                                    <option value="">-- Select Audit Name --</option>
                                                </select>
                                                {formik.touched.auditName && formik.errors.auditName ? (
                                                    <div className="invalid-feedback">{formik.errors.auditName}</div>
                                                ) : null}
                                            </div>
                                            <div className="d-md-inline d-sm-flex flex-column audit-modals">
                                                <button type="button" className="btn btn-light-primary main-btn-style m-1" onClick={handleNewAuditModal}>
                                                    <i className="la la-plus fs-1"></i>New Audit
                                                </button>
                                                <button type="button" className="btn btn-light-primary main-btn-style m-1" onClick={handleManageAuditModal}>
                                                    <i className="la la-cog fs-1"></i>Manage Audits
                                                </button>
                                                {newAuditModal && <NewAuditModal newAuditModal={newAuditModal} handleClose={handleClose} />}
                                                <ManageAuditModal show={manageAuditModal} handleClose={closeManageAuditModal} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='no-of-step'>Step 2: Audit Site and Location</h5>
                                        <div className="audit-section step-2 d-flex flex-column align-items-center justify-content-center">
                                            <div className="audit-row w-100 d-flex justify-content-center">
                                                <div className='form-group col-12 col-md-6'>
                                                    <label htmlFor="auditSite" className="form-label">Audit Site *</label>
                                                    <select
                                                        id="auditSite"
                                                        name="auditSite"
                                                        className={`form-select ${formik.touched.auditSite && formik.errors.auditSite ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.auditSite}
                                                    >
                                                        <option value="">Select Site</option>
                                                    </select>
                                                    {formik.touched.auditSite && formik.errors.auditSite ? (
                                                        <div className="invalid-feedback">{formik.errors.auditSite}</div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="audit-row w-100 d-flex justify-content-center mt-3">
                                                <div className='form-group col-12 col-md-6'>
                                                    <label htmlFor="auditLocation" className="form-label">Audit Location *</label>
                                                    <select
                                                        id="auditLocation"
                                                        name="auditLocation"
                                                        className={`form-select ${formik.touched.auditLocation && formik.errors.auditLocation ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.auditLocation}
                                                    >
                                                        <option value="">Select Location</option>
                                                        {/* Add more options here */}
                                                    </select>
                                                    {formik.touched.auditLocation && formik.errors.auditLocation ? (
                                                        <div className="invalid-feedback">{formik.errors.auditLocation}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="audit-section">
                                        <h5 className='no-of-step'>Step 3: Add Assets to List</h5>
                                        <p>Add assets to the list for the above selected Audit Site and Location.</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3 custom-border">
                                                    <div className='category-form'>
                                                        <label htmlFor="category" className="form-label me-4">Category</label>
                                                        <div>
                                                            <select
                                                                id="category"
                                                                name="category"
                                                                className="form-select mb-1"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.category}
                                                            >
                                                                <option value="">All Categories</option>
                                                            </select>
                                                            <p >Optionally you can filter the results by selecting a category.</p>
                                                        </div>
                                                        <div className=''>
                                                            <button onClick={pendingAuditHandler} type="button" className="btn btn-light-primary main-btn-style  mt-2 mb-1">Refresh List</button>
                                                            <p>This button adds/refreshes assets in the 'Assets Pending Audit' list below.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="assetIds" className="form-label">If you have a list of assets to audit, enter Asset IDs comma separated or one entry in each line.</label>
                                                    <textarea
                                                        id="assetIds"
                                                        name="assetIds"
                                                        rows={4}
                                                        className="form-control mb-2"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.assetIds}
                                                    ></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-light-primary main-btn-style  mt-2 mb-1 mx-auto d-flex align-items-center justify-content-center">Add to List</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {pendingAudit && <div>
                                <div className='mb-sm-3 mb-md-0'><h3>Assets Pending Audit</h3></div>
                                <div className='audit-table'>
                                    <div className='table-responsive mb-md-3 mb-5'>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        <label className="custom-checkbox d-flex justify-content-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectAll}
                                                                onChange={handleSelectAllChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </th>
                                                    <th scope="col">Asset Tag ID</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Assigned to</th>
                                                    <th scope="col">Site</th>
                                                    <th scope="col">Location</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {assetsData.map((asset) => (
                                                    <tr key={asset.id} role="row">
                                                        <td role="cell">
                                                            <label className="custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedAssets.includes(asset.id)}
                                                                    onChange={() => handleAssetChange(asset.id)}
                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </td>
                                                        <td className="table-elipses">
                                                            <button
                                                                type='button'
                                                                onClick={assetMinimalHandler(asset)}
                                                                className='btn btn-link asset-linking'
                                                            >
                                                                {asset.id}
                                                            </button>
                                                        </td>
                                                        <td className="table-elipses"><span>{asset.description}</span></td>
                                                        <td className="table-elipses"><span>{asset.status}</span></td>
                                                        <td className="table-elipses"><span>{asset.assignedTo}</span></td>
                                                        <td className="table-elipses"><span>{asset.site}</span></td>
                                                        <td className="table-elipses"><span>{asset.location}</span></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {assetMinimalDetail && (
                                            <AssetMinimalDetailModal show={assetMinimalDetail} onHide={handleModalClose} />
                                        )}
                                    </div>
                                    <button className="remove-asset-btn d-flex align-items-center justify-content-center">
                                        <i className="la la-times"></i> Remove Asset
                                    </button>
                                </div>
                                <div className=" my-4 py-5 audit-table-form">
                                    <div>
                                        <h5>Audit</h5>
                                    </div>
                                    <div>
                                        <p className='ms-4'>To audit, check assets in the 'Asset Pending Audit' list above, define 'Audit Date' and click on 'Audit' button. Audited assets will disappear from the list.</p>
                                        <form>
                                            <div className='row'>
                                                <div className='col-md-6 '>
                                                    <div className='category-form'>
                                                        <div className="form-group mb-4">
                                                            <label className=" col-form-label">Audit Date *</label>
                                                            <input type="datetime-local" className="form-control" id="auditDate" value="2024-06-21T02:15" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className=" col-form-label">Audit Notes</label>
                                                            <textarea className="form-control" id="auditNotes"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='category-form'>
                                                        <div className="form-group mb-2">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="recordGps"
                                                                    checked={isChecked}
                                                                    onChange={handleCheckboxChange} />
                                                                <label className="form-check-label ms-2">
                                                                    Record GPS Coordinates
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {isChecked &&
                                                            <>
                                                                <div className="form-group">
                                                                    <button onClick={handleMapShow} type="button" className="btn btn-light-primary main-btn-style m-1  bg-transparent"><i className="la la-map-marker fs-1 text-danger"></i> Mark on Map</button>
                                                                    <span className="ms-2">or enter manually:</span>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className=" col-form-label">Latitude</label>
                                                                    <input type="text" className="form-control" id="latitude" value="31.469693" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className=" col-form-label">Longitude</label>
                                                                    <input type="text" className="form-control" id="longitude" value="74.27284610000001" />
                                                                </div>
                                                                <MapModal mapShow={mapShow} handleMapClose={handleMapClose} />
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-start audit-control">
                                    <button type="button" className="btn border cancel-btn">Cancel</button>
                                    <button type="submit" className="btn btn-primary ms-3">Audit</button>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <Loader loading={isLoading} />
            </div>
        </>
    );
};

export default Audit;
